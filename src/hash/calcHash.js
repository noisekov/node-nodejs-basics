import { createReadStream } from "fs";
import { createHash } from "crypto";
import path from "path";

const calculateHash = async () => {
  const __dirname = path.resolve();
  const pathFile = path.join(
    __dirname,
    "/src/hash/files",
    "fileToCalculateHashFor.txt"
  );
  const hash = createHash("sha256");
  const input = createReadStream(pathFile);

  input.on("readable", () => {
    const data = input.read();

    if (data) hash.update(data);
    else {
      console.log(hash.digest("hex"));
    }
  });
};

await calculateHash();
