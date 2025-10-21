import path from "path";
import { cp, access } from "node:fs/promises";

const copy = async () => {
  const __dirname = path.resolve();
  const pathFileFrom = path.join(__dirname, "/src/fs", "files");
  const pathFileTo = path.join(__dirname, "/src/fs", "files_copy");

  if (!(await exists(pathFileTo))) {
    await cp(pathFileFrom, pathFileTo, {
      recursive: true,
    });
  } else {
    throw new Error("FS operation failed");
  }
};

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

await copy();
