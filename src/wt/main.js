import { Worker } from "worker_threads";
import path from "path";

const performCalculations = async () => {
  const CPU_CORES = 6;
  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, "/src/wt", "worker.js");
  const resultsArr = [];
  let startFibonacciNumber = 10;

  for (let core = 1; core <= CPU_CORES; core++) {
    const workerCPU = new Worker(pathFile, {
      workerData: startFibonacciNumber,
    });

    resultsArr.push(
      new Promise((resolve) => {
        workerCPU.on("message", async (message) => {
          resolve({ status: "resolved", data: message });
        });

        workerCPU.on("error", async (message) => {
          resolve({ status: "error", data: null });
        });
      })
    );

    startFibonacciNumber++;
  }

  const result = await Promise.all(resultsArr);
  console.log(result);

  return result;
};

await performCalculations();
