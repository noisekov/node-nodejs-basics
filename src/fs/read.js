import { readFile } from "fs/promises";
import path from "path";

const read = async () => {
  try {
    const __dirname = path.resolve();
    const pathFile = path.join(__dirname, "/src/fs/files", "fileToRead.txt");
    const contents = await readFile(pathFile, { encoding: "utf8" });

    console.log(contents);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await read();
