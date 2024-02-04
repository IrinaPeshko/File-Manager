import path from "path";
import { checkPath } from "../../utils/checkPath.js";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";

export const cd = async(input, directory) => {
  try {
    const params = await getUserParamsArr(input);
    if (params.length !== 1) throw new Error(`Invalid params`);
    const currentDirectory = directory["currentDirectory"];
    const newPath = path.resolve(currentDirectory, params[0]);
    const isDir = await checkPath(newPath, "dir");
    if (!isDir) throw new Error(`Directory does not exist: ${newPath}`);
    directory["currentDirectory"] = newPath;
  } catch {
    console.log("\x1b[31mOperation failed\x1b[0m");
  }
};
