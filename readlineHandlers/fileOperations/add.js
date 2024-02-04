import path from "path";
import * as fs from "node:fs";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";

export const add = async (input, directory) => {
  try {
    const params = await getUserParamsArr(input)
    if (params.length !== 1) throw new Error('Incorrect params')
    const pathToFile = path.resolve(directory["currentDirectory"], params[0]);
    await fs.promises.writeFile(pathToFile, '', { flag: "wx" });
  } catch {
    console.log("Operation failed");
  }
};