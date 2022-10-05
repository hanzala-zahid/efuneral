import { deployBackend } from "./app/deployment/backend-deployment/backend-deployment.ts";
import { deployFrontEnd } from "./app/deployment/frontend-deployment/frontend-deployment";
import { backendsToDeploy, frontendsToDeploy } from "./app/deployment/projects-data";

// Builds and deploys all backends and frontends
const deployAll = async () => {
    const deployments: Promise<void>[] = [];
    backendsToDeploy.forEach(backendToDeploy => {
        deployments.push(deployBackend(backendToDeploy));
    });
    frontendsToDeploy.forEach(frontendToDeploy => {
        deployments.push(deployFrontEnd(frontendToDeploy));
    });
    await Promise.all(deployments);
}
// Kicks the script off
deployAll().then(() => {
    console.info('Deployment Finished');
    process.exit(0);
}).catch((e) => {
    console.error('Deployment Error');
    console.error(e);
    process.exit(1);
})