import { writeFileSync } from "fs"

export const writeFile = (filePath: string, content: string) => {
    writeFileSync(filePath, content);
}