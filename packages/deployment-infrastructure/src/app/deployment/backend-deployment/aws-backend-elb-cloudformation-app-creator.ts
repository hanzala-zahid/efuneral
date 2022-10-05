import { App, Stack } from 'aws-cdk-lib';
import * as ElasticBeanstalk from 'aws-cdk-lib/aws-elasticbeanstalk';
import { CfnInstanceProfile, ManagedPolicy, Role, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { Asset } from 'aws-cdk-lib/aws-s3-assets';
import { getBuiltZippedBackendProjectPath } from '../../utils/dist-folder-path-builders';
import { getEnvironmentName } from "../../utils/environmentNameGetter";
import { BackendProjectMetadata, getActiveEnvironmentVariables, getActiveSslCertArn } from '../projects-data';

const defaultSolutionStackName = '64bit Amazon Linux 2 v5.5.0 running Node.js 14';

export const AWS_CONFIGURATION_NAMESPACES = {
    EC2_INSTANCES: 'aws:ec2:instances',
    COMMAND: 'aws:elasticbeanstalk:command',
    ENVIRONMENT: 'aws:elasticbeanstalk:environment',
    ELASTIC_LOAD_BALANCER_LISTENER: (port: number) => `aws:elbv2:listener:${port}`,
    LAUNCH_CONFIGURATION: 'aws:autoscaling:launchconfiguration',
    APPLICATION_ENVIRONMENT: 'aws:elasticbeanstalk:application:environment',
    ENVIRONMENT_PROCESS_DEFAULT: 'aws:elasticbeanstalk:environment:process:default',
    AUTOSCALING_GROUP: 'aws:autoscaling:asg'
}

const addInstanceProfileWithIAmRoleToCfnStack = (
    backendProjectMetadata: BackendProjectMetadata,
    cloudFormationStack: Stack,
    role: Role
) => {
    const profileName = `${backendProjectMetadata.name}-${getEnvironmentName()}-profile`
    return new CfnInstanceProfile(
        cloudFormationStack,
        profileName,
        {
            instanceProfileName: profileName,
            roles: [
                role.roleName
            ]
        }
    );
}

const addIAmRoleToCfnStack = (
    backendProjectMetadata: BackendProjectMetadata,
    cloudFormationStack: Stack
) => {
    const iAmRole = new Role(
        cloudFormationStack,
        `${backendProjectMetadata.name}-${getEnvironmentName()}-role`,
        {
            assumedBy: new ServicePrincipal('ec2.amazonaws.com'),
        }
    );
    const managedPolicy = ManagedPolicy.fromAwsManagedPolicyName('AWSElasticBeanstalkWebTier');
    iAmRole.addManagedPolicy(managedPolicy)
    return iAmRole;
}

const addElbEnvironmentToCfnStack = (
    backendProjectMetadata: BackendProjectMetadata,
    cloudFormationStack: Stack,
    dependentElasticBeanstalkApp: ElasticBeanstalk.CfnApplication,
    elasticBeanstalkAppVersion: ElasticBeanstalk.CfnApplicationVersion,
    iAmProfile: CfnInstanceProfile
) => {
    const env = new ElasticBeanstalk.CfnEnvironment(cloudFormationStack, 'Environment', {
        environmentName: `${backendProjectMetadata.name}-${getEnvironmentName()}`,
        applicationName: dependentElasticBeanstalkApp.applicationName,
        solutionStackName: defaultSolutionStackName,
        versionLabel: elasticBeanstalkAppVersion.ref,
        optionSettings: [
            // Settings for the environment's hardware and OS config
            {
                namespace: AWS_CONFIGURATION_NAMESPACES.EC2_INSTANCES,
                optionName: 'InstanceTypes',
                value: 't2.micro'
            },
            {
                namespace: AWS_CONFIGURATION_NAMESPACES.AUTOSCALING_GROUP,
                optionName: 'MinSize',
                value: '2'
            },
            {
                namespace: AWS_CONFIGURATION_NAMESPACES.AUTOSCALING_GROUP,
                optionName: 'MaxSize',
                value: '2'
            },
            {
                namespace: AWS_CONFIGURATION_NAMESPACES.COMMAND,
                optionName: 'DeploymentPolicy',
                value: 'RollingWithAdditionalBatch'
            },
            {
                namespace: AWS_CONFIGURATION_NAMESPACES.ENVIRONMENT,
                optionName: 'LoadBalancerType',
                value: 'application'
            },
            // Settings for deployment profile
            {
                namespace: AWS_CONFIGURATION_NAMESPACES.LAUNCH_CONFIGURATION,
                optionName: 'IamInstanceProfile',
                value: iAmProfile.instanceProfileName
            },
            // Settings for request port listening
            {
                namespace: AWS_CONFIGURATION_NAMESPACES.ENVIRONMENT_PROCESS_DEFAULT,
                optionName: 'Port',
                value: backendProjectMetadata.port.toString()
            },
            {
                namespace: AWS_CONFIGURATION_NAMESPACES.ELASTIC_LOAD_BALANCER_LISTENER(443),
                optionName: 'Protocol',
                value: 'HTTPS'
            },
            {
                namespace: AWS_CONFIGURATION_NAMESPACES.ELASTIC_LOAD_BALANCER_LISTENER(443),
                optionName: 'SSLCertificateArns',
                value: getActiveSslCertArn(backendProjectMetadata)
            },
            // Settings for ELB health checking
            {
                namespace: AWS_CONFIGURATION_NAMESPACES.ENVIRONMENT_PROCESS_DEFAULT,
                optionName: 'HealthCheckPath',
                value: backendProjectMetadata.healthCheckPath
            },
            // Settings for the deployed ec2 server to recieve
            ...getActiveEnvironmentVariables(backendProjectMetadata).map(environmentVariable => ({
                namespace: AWS_CONFIGURATION_NAMESPACES.APPLICATION_ENVIRONMENT,
                optionName: environmentVariable.variableName,
                value: environmentVariable.variableValue
            })),
        ]
    });
    // Wait for ELB application before creating ELB environment
    env.addDependsOn(dependentElasticBeanstalkApp);
}

const addElbAppToCfnStack = (backendProjectMetadata: BackendProjectMetadata, cloudFormationStack: Stack) => {
    const elasticBeanstalkApp = new ElasticBeanstalk.CfnApplication(cloudFormationStack, `${backendProjectMetadata.name}-${getEnvironmentName()}`, {
        applicationName: `${backendProjectMetadata.name}-${getEnvironmentName()}`
    });
    return elasticBeanstalkApp;
}

const addS3CodeArchiveToCfnStack = (backendProjectMetadata: BackendProjectMetadata, cloudFormationStack: Stack) => {
     const s3CodeArchive = new Asset(cloudFormationStack, `${backendProjectMetadata.name}-s3-bucket`, {
         path: getBuiltZippedBackendProjectPath(backendProjectMetadata)
     });
     return s3CodeArchive;
}

const addElbAppVersionToCfnStack = (
    backendProjectMetadata: BackendProjectMetadata,
    cloudFormationStack: Stack,
    dependentElasticBeanstalkApp: ElasticBeanstalk.CfnApplication,
    s3CodeArchive: Asset
) => {
    const elbApplicationVersion = new ElasticBeanstalk.CfnApplicationVersion(
        cloudFormationStack,
        `${backendProjectMetadata.name}-app-version-${new Date().getTime()}`,
        {
            applicationName: dependentElasticBeanstalkApp.applicationName,
            sourceBundle: {
                s3Bucket: s3CodeArchive.s3BucketName,
                s3Key: s3CodeArchive.s3ObjectKey,
            }
        }
    )
    // Make sure the ELB App is made before we try to make app versions
    elbApplicationVersion.addDependsOn(dependentElasticBeanstalkApp);
    return elbApplicationVersion;
}

const AddCfnStackToCfnApp = (backendProjectMetadata: BackendProjectMetadata, cloudFormationApp: App) => {
    // Create an empty stack, adding it to the cloudformation app
    const cloudFormationStack = new Stack(cloudFormationApp, `${backendProjectMetadata.name}-${getEnvironmentName()}-stack`);
    // Add an IAm role to the stack
    const iAmRole = addIAmRoleToCfnStack(backendProjectMetadata, cloudFormationStack);
    // Add an IAm profile in the stack using the IAm role
    const iAmProfile = addInstanceProfileWithIAmRoleToCfnStack(backendProjectMetadata, cloudFormationStack, iAmRole)
    // Upload code to s3
    const s3CodeArchive = addS3CodeArchiveToCfnStack(backendProjectMetadata, cloudFormationStack);
    // Add elastic beanstalk app to stack
    const elasticBeanstalkApp = addElbAppToCfnStack(backendProjectMetadata, cloudFormationStack);
    // Add new application version to elastic beanstalk app
    const elasticBeanstalkAppVersion = addElbAppVersionToCfnStack(
        backendProjectMetadata,
        cloudFormationStack,
        elasticBeanstalkApp,
        s3CodeArchive
    )
    // Add new elastic beanstalk environment using the new version to the stack
    addElbEnvironmentToCfnStack(
        backendProjectMetadata,
        cloudFormationStack,
        elasticBeanstalkApp,
        elasticBeanstalkAppVersion,
        iAmProfile);
}

export const createCfnAppForBackend = (backendProjectMetadata: BackendProjectMetadata) => {
    // Create cloud formation app
    const cloudFormationApp = new App();
    // Add tech stack
    AddCfnStackToCfnApp(backendProjectMetadata, cloudFormationApp);
    // Return cloud formation app
    return cloudFormationApp;
}