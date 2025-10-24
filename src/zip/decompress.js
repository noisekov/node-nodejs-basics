import fs from "fs";
import path from "path";
import zlib from "zlib";

const decompress = async () => {
  const __dirname = path.resolve();
  const pathFileFrom = path.join(__dirname, "/src/zip/files", "archive.gz");
  const pathFileTo = path.join(
    __dirname,
    "/src/zip/files",
    "fileToCompress.txt"
  );

  const readStream = fs.createReadStream(pathFileFrom);
  const writeStream = fs.createWriteStream(pathFileTo);
  const gunzipStream = zlib.createGunzip();
  readStream.pipe(gunzipStream).pipe(writeStream);
};

await decompress();
