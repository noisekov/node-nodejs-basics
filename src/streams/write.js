import { createWriteStream } from "node:fs";
import path from "path";

const write = async () => {
  process.stdin.setEncoding("utf8");
  const __dirname = path.resolve();
  const pathFile = path.join(
    __dirname,
    "/src/streams/files",
    "fileToWrite.txt"
  );

  const writableStream = createWriteStream(pathFile);
  process.stdin.pipe(writableStream);
};

await write();
