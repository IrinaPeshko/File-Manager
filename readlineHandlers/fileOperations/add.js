import path from "path";
import * as fs from "node:fs";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";

export const add = async (input, directory) => {
  try {
    const params = await getUserParamsArr(input);
    if (params.length !== 1) throw new Error("Invalid input");
    const pathToFile = path.resolve(directory["currentDirectory"], params[0]);
    await fs.promises.writeFile(pathToFile, "", { flag: "wx" });
  } catch (err) {
    let errMessage = "Operation failed";
    if (err.message === "Invalid input") {
      errMessage = "Invalid input";
    }
    console.log(`\x1b[31m${errMessage}\x1b[0m`);
  }
};
