import fs from "fs";
import path from "path";

const create = async () => {
  const __dirname = path.resolve();
  const pathFile = path.join(__dirname, "/src/fs/files", "fresh.txt");

  if (fs.existsSync(pathFile)) {
    throw new Error("FS operation failed");
  }
  fs.appendFile(pathFile, "I am fresh and young", function (err) {
    if (err) throw err;
    console.log("Saved!");
  });
};

await create();
