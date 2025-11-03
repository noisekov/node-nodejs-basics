import { spawn } from "node:child_process";
import path from "path";

const spawnChildProcess = async (args) => {
  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, "/src/cp/files", "script.js");

  const childProcess = spawn("node", [pathFile, ...args]);
  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(["someArgument1", "someArgument2"]);
