import path from "path";
import * as fs from "node:fs";

export const add = (input, directory) => {
    console.log(input);
  try {
    const file = input.slice(3).trim();
    const pathToFile = path.join(directory["currentDirectory"], file);
    fs.writeFile(pathToFile, '', {
        flag: "wx",
      })
  } catch {
    console.log("Operation failed");
  }
};