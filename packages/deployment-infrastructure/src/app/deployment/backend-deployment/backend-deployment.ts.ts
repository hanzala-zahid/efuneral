import { getBuiltUnzippedBackendProjectPath, getBuiltZippedBackendProjectPath } from "../../utils/dist-folder-path-builders";
import { execAsync } from "../../utils/exec-promise";
import { writeFile } from "../../utils/writeFile";
import { zipDirectory } from "../../utils/zipper";
import { BackendProjectMetadata } from "../projects-data";
import { createCfnAppForBackend } from "./aws-backend-elb-cloudformation-app-creator";
import { deployAwsCfnApp } from "../deployment/aws-cloudformation-assembly-deployer";

const buildBackend = async (backendProjectMetadata: BackendProjectMetadata) => {
    // Move code into 
    await execAsync(`npx nx build ${backendProjectMetadata.name} --externalDependencies=none --skip-nx-cache`);
    // this is required for elastic beanstalk to know how to start
    writeFile(`${getBuiltUnzippedBackendProjectPath(backendProjectMetadata)}/package.json`, `
        {
            "scripts": {
                "start": "${backendProjectMetadata.startScript}"
            }
        }
    `);
    zipDirectory(
        getBuiltUnzippedBackendProjectPath(backendProjectMetadata),
        getBuiltZippedBackendProjectPath(backendProjectMetadata)
    );
}

export const deployBackend = async (backendProjectMetadata: BackendProjectMetadata) => {
    // Build a deployable backend
    await buildBackend(backendProjectMetadata);
    // Create a cloud formation app / stack 
    const cloudFormationApp = createCfnAppForBackend(backendProjectMetadata);
    // Deploy the app
    await deployAwsCfnApp(cloudFormationApp);
}