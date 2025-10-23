import { access, unlink } from "fs/promises";
import path from "path";

const remove = async () => {
  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, "/src/fs/files", "fileToRemove.txt");

  if (await exists(pathFile)) {
    await unlink(pathFile);
  } else {
    throw new Error("FS operation failed");
  }
};

await remove();

async function exists(path) {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
}
