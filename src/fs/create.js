import fs from "node:fs/promises";
import path from "path";

const create = async () => {
  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, "/src/fs/files", "fresh.txt");

  try {
    await fs.writeFile(pathFile, "I am fresh and young", { flag: "wx" });
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await create();
