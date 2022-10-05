import { BackendProjectMetadata, FrontendProjectMetadata } from "../deployment/projects-data";

const buildDistFolderPath = () => {
    return `${process.cwd()}/dist`;
}

export const getBuiltUnzippedBackendProjectPath = (backendProjectMetadata: BackendProjectMetadata) => {
    return `${buildDistFolderPath()}/packages/backends/${backendProjectMetadata.name}`
}

export const getBuiltZippedBackendProjectPath = (backendProjectMetadata: BackendProjectMetadata) => {
    return `${buildDistFolderPath()}/packages/backends/${backendProjectMetadata.name}.zip`
}
export const getBuiltUnzippedFrontendProjectPath = (backendProjectMetadata: FrontendProjectMetadata) => {
    return `${buildDistFolderPath()}/packages/frontends/${backendProjectMetadata.name}`
}
export const getBuiltZippedFrontendProjectPath = (backendProjectMetadata: FrontendProjectMetadata) => {
    return `${buildDistFolderPath()}/packages/frontends/${backendProjectMetadata.name}.zip`
}