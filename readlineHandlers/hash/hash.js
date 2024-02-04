import path from "path";
import { promises as fs } from "fs";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";
import { checkPath } from "../../utils/checkPath.js";
import { createHash } from "crypto";

export const hash = async (input, directory) => {
  try {
    const params = await getUserParamsArr(input);
    if (params.length !== 1) throw new Error("Invalid input");
    const pathToFile = path.resolve(directory["currentDirectory"], params[0]);
    const isFile = await checkPath(pathToFile, "file");
    if (!isFile) throw new Error("Invalid input");

    const stringToHash = await fs.readFile(pathToFile, "utf8");
    const hash = createHash("sha256").update(stringToHash).digest("hex");
    console.log(hash);
  } catch (err) {
    let errMessage = "Operation failed";
    if (err.message === "Invalid input") {
      errMessage = "Invalid input";
    }
    console.log(`\x1b[31m${errMessage}\x1b[0m`);
  }
};
