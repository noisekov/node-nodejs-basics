import fs from "fs";
import { Transform } from "stream";

const transform = async () => {
  const reverseText = new Transform({
    transform(chunk, encoding, callback) {
      const reversedText = chunk.toString().split("").reverse().join("") + "\n";
      callback(null, reversedText);
    },
  });

  process.stdin.pipe(reverseText).pipe(process.stdout);
};

await transform();
