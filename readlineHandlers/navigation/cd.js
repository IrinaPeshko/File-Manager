import path from "path";
import { checkPath } from "../../utils/checkPath.js";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";

export const cd = async(input, directory) => {
  try {
    const params = await getUserParamsArr(input);
    if (params.length !== 1) throw new Error("Invalid input");
    const currentDirectory = directory["currentDirectory"];
    const newPath = path.resolve(currentDirectory, params[0]);
    const isDir = await checkPath(newPath, "dir");
    if (!isDir) throw new Error(`"Invalid input"`);
    directory["currentDirectory"] = newPath;
  } catch (err) {
    let errMessage = "Operation failed";
    if (err.message === "Invalid input") {
      errMessage = "Invalid input";
    }
    console.log(`\x1b[31m${errMessage}\x1b[0m`);
  }
};
