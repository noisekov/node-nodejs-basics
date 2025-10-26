import { createReadStream, createWriteStream } from "node:fs";
import process from "node:process";
import { createGzip } from "node:zlib";
import { pipeline } from "node:stream/promises";
import path from "path";

const compress = async () => {
  const __dirname = path.resolve();
  const pathFileFrom = path.join(
    __dirname,
    "/src/zip/files",
    "fileToCompress.txt"
  );
  const pathFileTo = path.join(__dirname, "/src/zip/files", "archive.gz");

  const gzip = createGzip();
  const source = createReadStream(pathFileFrom);
  const destination = createWriteStream(pathFileTo);
  await pipeline(source, gzip, destination);
};

await compress();
