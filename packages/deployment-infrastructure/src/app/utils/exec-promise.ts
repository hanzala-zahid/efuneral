import { exec } from "child_process";

// Intelligently copied from the internet, turns exec into a promise
export const execAsync = (cmd: string) => {
    return new Promise<string>((resolve, reject) => {
        let childPid = 0;
        const childProcess = exec(cmd, (error, stdout, stderr) => {
            if (error || stderr) {
                return reject(error || stderr);
            }
            return resolve(stdout);
        });
        // Set child pid reference hopefully before we finish command
        // (it will get logged with completion text)
        childPid = childProcess.pid;
        console.info(`Process ${childPid || '[Unknown PID]'}: ${cmd}`)
    });
}