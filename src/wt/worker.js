// n should be received from main thread
const nthFibonacci = (n) =>
  n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

import { workerData, parentPort } from "worker_threads";

const sendResult = () => {
  parentPort.postMessage(nthFibonacci(workerData));
};

sendResult();
