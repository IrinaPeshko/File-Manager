import path from "path";
import { promises as fs } from "fs";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";
import { checkPath } from "../../utils/checkPath.js";

export const rn = async (input, directory) => {
  try {
    const params = getUserParamsArr(input);
    if (params.length !== 2) throw new Error("Enter correct params");

    const lastFilePath = path.resolve(directory["currentDirectory"], params[0]);
    const isFile = await checkPath(lastFilePath, "file");
    if (!isFile) throw new Error("file does not exist");

    const lastFileDirectory = path.dirname(lastFilePath);
    const newFilePath = path.join(lastFileDirectory, params[1])
    await fs.rename(lastFilePath, newFilePath);
  } catch {
    console.log("\x1b[31mOperation failed\x1b[0m");
  }
};
