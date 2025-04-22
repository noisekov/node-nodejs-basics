import path from 'path';
import { cpSync, existsSync, mkdirSync } from 'node:fs';

const copy = async () => {
  const __dirname = path.resolve();
  const pathFileFrom = path.join(__dirname, "/src/fs", 'files');
  const pathFileTo = path.join(__dirname, "/src/fs", 'files_copy');


  if (existsSync(pathFileTo)) {
    throw new Error('FS operation failed');
  }
  
  mkdirSync(pathFileTo);
  cpSync(pathFileFrom, pathFileTo, { recursive: true });
};

await copy();
