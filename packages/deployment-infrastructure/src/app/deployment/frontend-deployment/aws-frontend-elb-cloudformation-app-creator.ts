import { App, aws_cloudfront_origins, Stack } from 'aws-cdk-lib';
import { CachePolicy, Distribution, ViewerCertificate } from 'aws-cdk-lib/aws-cloudfront';
import { getBuiltUnzippedFrontendProjectPath } from '../../utils/dist-folder-path-builders';
import { getEnvironmentName } from "../../utils/environmentNameGetter";
import { FrontendProjectMetadata, getActiveFrontendDomain, getActiveFrontendSslCertArn } from '../projects-data';
import { Bucket } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Certificate } from 'aws-cdk-lib/aws-certificatemanager';

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

const addS3CodeArchiveToCfnStack = (
    FrontendProjectMetadata: FrontendProjectMetadata,
    cloudFormationStack: Stack
) => {
    const s3Bucket = new Bucket(cloudFormationStack, `${FrontendProjectMetadata.name}-s3-bucket`, {
        websiteIndexDocument: 'index.html',
        websiteErrorDocument: 'index.html',
        publicReadAccess: true
    });
    new BucketDeployment(cloudFormationStack, `${FrontendProjectMetadata.name}-s3-bucket-deployment`, {
        sources: [Source.asset(getBuiltUnzippedFrontendProjectPath(FrontendProjectMetadata))],
        destinationBucket: s3Bucket,
    })
    return s3Bucket;
}

const addCloudFrontDistrosToStack = (
    FrontendProjectMetadata: FrontendProjectMetadata,
    s3Bucket: Bucket,
    cloudFormationStack: Stack,
) => {
    return FrontendProjectMetadata.domainConfigurations.map(domainConfiguration => {
        return new Distribution(cloudFormationStack, `${FrontendProjectMetadata.name}-${domainConfiguration.uniqueKey}-cf-distro`, {
            defaultBehavior: {
                origin: new aws_cloudfront_origins.S3Origin(
                    s3Bucket
                ),
                cachePolicy: CachePolicy.CACHING_DISABLED
            },
            domainNames: [getActiveFrontendDomain(domainConfiguration)],
            certificate: Certificate.fromCertificateArn(
                cloudFormationStack,
                `${FrontendProjectMetadata.name}-${domainConfiguration.uniqueKey}-certificate`,
                getActiveFrontendSslCertArn(domainConfiguration)
            ),
            comment: `${FrontendProjectMetadata.name} ${domainConfiguration.uniqueKey}`
        });
    })
}

const AddCfnStackToCfnApp = (FrontendProjectMetadata: FrontendProjectMetadata, cloudFormationApp: App) => {
    // Create an empty stack, adding it to the cloudformation app
    const cloudFormationStack = new Stack(cloudFormationApp, `${FrontendProjectMetadata.name}-${getEnvironmentName()}-stack`);
    // Upload build to s3
    const s3CodeArchive = addS3CodeArchiveToCfnStack(FrontendProjectMetadata, cloudFormationStack);
    // Add cloudfront service point to stack
    addCloudFrontDistrosToStack(FrontendProjectMetadata, s3CodeArchive, cloudFormationStack);
}

export const createCfnAppForFrontend = (FrontendProjectMetadata: FrontendProjectMetadata) => {
    // Create cloud formation app
    const cloudFormationApp = new App();
    // Add tech stack
    AddCfnStackToCfnApp(FrontendProjectMetadata, cloudFormationApp);
    // Return cloud formation app
    return cloudFormationApp;
}
