import { rename, access } from "fs/promises";
import path from "path";

const __dirname = path.resolve();
const pathFile = (fileName) =>
  path.join(__dirname, `/src/fs/files/${fileName}`);

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}

const renameFile = async () => {
  const pathInitialFile = pathFile("wrongFilename.txt");
  const pathRenameFile = pathFile("properFilename.md");

  if (!(await exists(pathInitialFile)) || (await exists(pathRenameFile))) {
    throw new Error("FS operation failed");
  }

  await rename(pathInitialFile, pathRenameFile);
};

await renameFile();
