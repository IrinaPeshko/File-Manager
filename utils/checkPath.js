import fs from 'fs';

export async function checkPath(path, fileOrDirectory) {
  try {
    if (!path) {
      return false;
    }

    await fs.promises.access(path, fs.constants.F_OK);

    const stats = await fs.promises.stat(path);

    if (fileOrDirectory === 'dir' && stats.isDirectory()) {
      return true;
    }

    if (fileOrDirectory === 'file' && !stats.isDirectory()) {
      return true;
    }

    return false;
  } catch {
    return false;
  }
}
