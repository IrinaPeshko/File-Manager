import path from "path";
import { promises as fs } from "fs";

export const ls = async (directory) => {
  try {
    const files = await fs.readdir(directory["currentDirectory"], "utf8");
    const filesArr = [];
    const directoryArr = [];
    const otherArr = [];

    for (const file of files) {
      const filePath = path.join(directory["currentDirectory"], file);
      const stats = await fs.stat(filePath);
      if (stats.isDirectory()) {
        directoryArr.push({ Name: file, Type: "directory" });
      } else if (stats.isFile()) {
        filesArr.push({ Name: file, Type: "file" });
      } else {
        otherArr.push({ Name: file, Type: "other" });
      }
    }
    
    console.table(directoryArr.concat(filesArr, otherArr));
  } catch {
    console.log("\x1b[31mOperation failed\x1b[0m");
  }
};
