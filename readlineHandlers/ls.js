import path from "path";
import { promises as fs } from "fs";

export const ls = async (directory) => {
    try {
        const files = await fs.readdir(directory["currentDirectory"], "utf8");
  const filesArr = [];
  const directoryArr = [];
  for (let i = 0; i<files.length; i++) {
    const filePath = path.join(directory["currentDirectory"], files[i]);
    const stats = await fs.stat(filePath);
    if (stats.isDirectory()){
        directoryArr.push({Name:files[i], Type:'directory'})
    } else {
        filesArr.push({Name:files[i], Type:'file'})
    }
  }
  console.table(directoryArr.concat(filesArr));
    } catch {
        console.log('Operation failed');
    }
  
};
