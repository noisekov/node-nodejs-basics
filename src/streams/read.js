import { createReadStream } from "node:fs";
import path from "path";

const read = async () => {
  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, "/src/streams/files", "fileToRead.txt");
  const readStream = createReadStream(pathFile);

  readStream.pipe(process.stdout);
};

await read();
