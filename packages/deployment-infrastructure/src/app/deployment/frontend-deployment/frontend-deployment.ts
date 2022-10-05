import { getBuiltUnzippedFrontendProjectPath, getBuiltZippedFrontendProjectPath } from "../../utils/dist-folder-path-builders";
import { execAsync } from "../../utils/exec-promise";
import { zipDirectory } from "../../utils/zipper";
import { deployAwsCfnApp } from "../deployment/aws-cloudformation-assembly-deployer";
import { FrontendProjectMetadata } from "../projects-data";
import { createCfnAppForFrontend } from "./aws-frontend-elb-cloudformation-app-creator";

const buildFrontEnd = async (frontendProjectMetadata: FrontendProjectMetadata) => {
    // Move code into 
    await execAsync(`npx nx build ${frontendProjectMetadata.name} --externalDependencies=none --skip-nx-cache`);
    zipDirectory(
        getBuiltUnzippedFrontendProjectPath(frontendProjectMetadata),
        getBuiltZippedFrontendProjectPath(frontendProjectMetadata)
    );
}


export const deployFrontEnd = async (frontendProjectMetadata: FrontendProjectMetadata) => {
    // Build a deployable frontend
    await buildFrontEnd(frontendProjectMetadata);
    // Create a cloud formation app / stack 
    const cloudFormationApp = createCfnAppForFrontend(frontendProjectMetadata);
    // Deploy the app
    await deployAwsCfnApp(cloudFormationApp);
}