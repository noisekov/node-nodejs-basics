import { Worker } from "worker_threads";
import path from "path";
import os from "os";

const performCalculations = async () => {
  const CPU_CORES = os.cpus().length;
  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, "/src/wt", "worker.js");
  const workersResults = [];
  let startFibonacciNumber = 10;
  const mistakenResult = { status: "error", data: null };

  for (let core = 1; core <= CPU_CORES; core++) {
    const workerCPU = new Worker(pathFile, {
      workerData: startFibonacciNumber,
    });

    workersResults.push(
      new Promise((resolve) => {
        workerCPU.on("message", (data) => {
          resolve({ status: "resolved", data });
        });

        workerCPU.on("error", () => {
          resolve(mistakenResult);
        });

        workerCPU.on("exit", (code) => {
          if (code !== 0) {
            resolve(mistakenResult);
          }
        });
      })
    );

    startFibonacciNumber++;
  }

  const result = await Promise.all(workersResults);
  console.log(result);

  return result;
};

await performCalculations();
