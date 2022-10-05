import * as AdmZip from 'adm-zip';

export const zipDirectory = (zippableFolderPath: string, zipFilePath: string) => {
    const zip = new AdmZip();
    zip.addLocalFolder(zippableFolderPath);
    zip.writeZip(zipFilePath);
}