import { App } from "aws-cdk-lib";
import { CloudAssembly } from "aws-cdk-lib/cx-api";
import { execAsync } from "../../utils/exec-promise";

const synthesizeApp = (cloudFormationApp: App) => {
    // Synthesize the cloud formation app into a cloud formation assembly
    const cloudFormationAssembly = cloudFormationApp.synth();
    return cloudFormationAssembly;
}

const deployAwsCfnAssembly = async (cloudFormationAssembly: CloudAssembly) => {
    try {
        await execAsync(`npx cdk deploy --app ${cloudFormationAssembly.directory} --require-approval never`);
    }
    catch (e) {
        // I swear to god I wasn't drunk when I wrote this
        // This is a legitimate patch at this point in time
        // I dream of the day we can completely remove this stupid try catch and it's stupid child if statement
        // https://github.com/aws/aws-cdk/issues/7717
        if(!JSON.stringify(e).includes('✅')) {
            throw e;
        }
    }
}

export const deployAwsCfnApp = async (cloudFormationApp: App) => {
    const cloudFormattionAssembly = synthesizeApp(cloudFormationApp);
    await deployAwsCfnAssembly(cloudFormattionAssembly);
}