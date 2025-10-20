import path from "path";
import { cp, access } from "node:fs/promises";

const copy = async () => {
  const __dirname = path.resolve();
  const pathFileFrom = path.join(__dirname, "/src/fs", "files");
  const pathFileTo = path.join(__dirname, "/src/fs", "files_copy");

  try {
    await access(pathFileTo);
    throw new Error("FS operation failed");
  } catch (err) {
    const FILE_NOT_EXITS_ERR = "ENOENT";

    if (err.code === FILE_NOT_EXITS_ERR) {
      await cp(pathFileFrom, pathFileTo, {
        recursive: true,
      });
    } else {
      throw new Error("FS operation failed");
    }
  }
};

await copy();
