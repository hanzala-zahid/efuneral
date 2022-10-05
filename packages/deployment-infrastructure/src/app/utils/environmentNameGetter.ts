export enum DeploymentEnvironment {
    TEST = 'test',
    DEMO = 'demo',
    PROD = 'prod',
}

export const getEnvironmentName = (): DeploymentEnvironment => {
    switch(process.env.DEPLOYMENT_ENVIRONMENT?.toLowerCase()) {
        case 'test':
            return DeploymentEnvironment.TEST;
        case 'demo':
            return DeploymentEnvironment.DEMO;
        case 'prod':
            return DeploymentEnvironment.PROD;
        default:
            console.warn(`Couldn't find proper DEPLOYMENT_ENVIRONMENT environment variable during deployment ${process.env.DEPLOYMENT_ENVIRONMENT}, defaulting to test`);
            return DeploymentEnvironment.TEST;
    }
}