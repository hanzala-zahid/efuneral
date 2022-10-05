import { DeploymentEnvironment, getEnvironmentName } from "../utils/environmentNameGetter";

interface EnvironmentVariable {
    variableName: string,
    variableValue: string
}

// Models describing a backend project to be deployed
export interface BackendProjectMetadata {
    // Name of the nx app to be deployed
    name: string,
    // The path that ELB will use for it's health check (Should always return 200 for GET)
    healthCheckPath: string,
    // The port that the server will run on (HTTPS will happen, and then it will redirect the HTTP request to this port)
    port: number,
    // The script that will be run on the dist package
    startScript: string,
    // The AWS SSL Cert ARN to apply to the elastic beanstalk listener
    awsSslCertArn: {
        testing: string,
        demo: string,
        production: string
    },
    // Will be useable by the deployed code as environment variables
    environmentVariables: {
        testing: EnvironmentVariable[],
        production: EnvironmentVariable[],
        demo: EnvironmentVariable[],
    }
}
// List of backend project names to deploy
export const backendsToDeploy: BackendProjectMetadata[] = [

];

//Returns current environment SSL certs ARN for BackendProjectMetadata
export const getActiveSslCertArn = (backendProjectMetadata: BackendProjectMetadata): string => {
    switch(getEnvironmentName()) {
        case DeploymentEnvironment.TEST:
            return backendProjectMetadata.awsSslCertArn.testing;
        case DeploymentEnvironment.DEMO:
            return backendProjectMetadata.awsSslCertArn.demo;
        case DeploymentEnvironment.PROD:
            return backendProjectMetadata.awsSslCertArn.production;
        default:
            throw new Error(`Can't get SSL Cert ARN for ${JSON.stringify(backendProjectMetadata)}`)
    }
}

//Returns current environment environment variables for BackendProjectMetadata
export const getActiveEnvironmentVariables = (backendProjectMetadata: BackendProjectMetadata): EnvironmentVariable[] => {
    switch(getEnvironmentName()) {
        case DeploymentEnvironment.TEST:
            return backendProjectMetadata.environmentVariables.testing;
        case DeploymentEnvironment.DEMO:
            return backendProjectMetadata.environmentVariables.demo;
        case DeploymentEnvironment.PROD:
            return backendProjectMetadata.environmentVariables.production;
        default:
            throw new Error(`Can't get environment variables for ${JSON.stringify(backendProjectMetadata)}`)
    }
}

// Models describing a frontend project to be deployed
export interface FrontendDomainConfiguration {
    uniqueKey: string, // A Key which differentiates the various domain distributions for a project eg. tulip/efuneral/titan
    awsSslCertArn: {
        testing: string,
        demo: string,
        production: string,
    };
    domain: {
        testing: string,
        demo: string,
        production: string,
    };
}

export interface FrontendProjectMetadata {
    domainConfigurations: FrontendDomainConfiguration[],
    name: string
}
//Returns current environment domain SSL Arn
export const getActiveFrontendSslCertArn = (frontendDomainConfiguration: FrontendDomainConfiguration): string => {
    switch(getEnvironmentName()) {
        case DeploymentEnvironment.TEST:
            return frontendDomainConfiguration.awsSslCertArn.testing;
        case DeploymentEnvironment.DEMO:
            return frontendDomainConfiguration.awsSslCertArn.demo;
        case DeploymentEnvironment.PROD:
            return frontendDomainConfiguration.awsSslCertArn.production;
        default:
            throw new Error(`Can't get SSL Cert ARN for ${JSON.stringify(frontendDomainConfiguration)}`)
    }
}
//Returns current environment domain
export const getActiveFrontendDomain = (frontendDomainConfiguration: FrontendDomainConfiguration): string => {
    switch(getEnvironmentName()) {
        case DeploymentEnvironment.TEST:
            return frontendDomainConfiguration.domain.testing;
        case DeploymentEnvironment.DEMO:
            return frontendDomainConfiguration.domain.demo;
        case DeploymentEnvironment.PROD:
            return frontendDomainConfiguration.domain.production;
        default:
            throw new Error(`Can't get SSL Cert ARN for ${JSON.stringify(frontendDomainConfiguration)}`)
    }
}
// Settings for Single Page Checkout
const singlePageCheckout: FrontendProjectMetadata = {
    name: 'single-page-checkout',
    domainConfigurations: [
        {
            uniqueKey: 'efuneral',
            awsSslCertArn: {
                testing: 'arn:aws:acm:us-east-1:708783470810:certificate/2ca5e90b-1eec-45a0-a611-58a1fe1e78b3',
                demo: 'arn:aws:acm:us-east-1:654590494370:certificate/36af41ae-b271-43ea-a64b-7d244b21db55',
                production: 'arn:aws:acm:us-east-1:654590494370:certificate/7b6da866-4fb2-4da4-8cc1-a3854afe0203',
            },
            domain: {
                testing: 'checkout.stagingefuneral.com',
                demo: 'checkout.efuneraldemo.com',
                production: 'checkout.efuneral.com',
            }
        }
    ]
}

const contractSigningApp: FrontendProjectMetadata = {
    name: 'contract-signing-app',
    domainConfigurations: [
        {
            uniqueKey: 'efuneral',
            awsSslCertArn: {
                testing: 'arn:aws:acm:us-east-1:708783470810:certificate/2ca5e90b-1eec-45a0-a611-58a1fe1e78b3',
                demo: 'arn:aws:acm:us-east-1:654590494370:certificate/36af41ae-b271-43ea-a64b-7d244b21db55',
                production: 'arn:aws:acm:us-east-1:654590494370:certificate/7b6da866-4fb2-4da4-8cc1-a3854afe0203',
            },
            domain: {
                testing: 'sign.stagingefuneral.com',
                demo: 'sign.efuneraldemo.com',
                production: 'sign.efuneral.com',
            }
        }
    ]
}


// List of frontend project names to deploy
export const frontendsToDeploy: FrontendProjectMetadata[] = [
    singlePageCheckout,
    contractSigningApp,
];