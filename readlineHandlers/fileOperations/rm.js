import path from "path";
import { promises as fs } from "fs";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";
import { checkPath } from "../../utils/checkPath.js";

export const rm = async (input, directory) => {
  try {
    const params = getUserParamsArr(input);
    if (params.length !== 1) throw new Error("Invalid input");

    const pathFileToRemove = path.resolve(
      directory["currentDirectory"],
      params[0]
    );
    const isFile = await checkPath(pathFileToRemove, "file");
    if (!isFile) throw new Error("Invalid input");

    await fs.rm(pathFileToRemove);
  } catch (err) {
    let errMessage = "Operation failed";
    if (err.message === "Invalid input") {
      errMessage = "Invalid input";
    }
    console.log(`\x1b[31m${errMessage}\x1b[0m`);
  }
};
