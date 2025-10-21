import { readdir } from "node:fs/promises";
import path from "path";

const list = async () => {
  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, "/src/fs/", "files");

  try {
    const files = await readdir(pathFile);

    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
