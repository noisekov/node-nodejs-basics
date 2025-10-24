import fs from "node:fs/promises";
import path from "path";

const write = async () => {
  process.stdin.setEncoding("utf8");
  const __dirname = path.resolve();
  const pathFile = path.join(
    __dirname,
    "/src/streams/files",
    "fileToWrite.txt"
  );

  process.stdin.on("readable", async () => {
    let chunk;

    while ((chunk = process.stdin.read()) !== null) {
      await fs.writeFile(pathFile, chunk, { flag: "a+" });
    }
  });
};

await write();
