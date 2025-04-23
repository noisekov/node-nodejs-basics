import fsPromises from 'fs/promises'
import path from 'path';

const __dirname = path.resolve();
const pathFile = (fileName) => path.join(__dirname, `/src/fs/files/${fileName}`);

async function exists (path) {  
  try {
    await fsPromises.access(path)
    return true
  } catch {
    return false
  }
}

const rename = async () => {
  const pathInitialFile = pathFile('wrongFilename.txt');
  const pathRenameFile = pathFile('properFilename.md');

  if (!await exists(pathInitialFile) || await exists(pathRenameFile)) {
    throw new Error('FS operation failed')
  }

  await fsPromises.rename(
    pathInitialFile,
    pathRenameFile
  )
};

await rename();