import { createReadStream } from "fs";
import path from "path";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";
import { checkPath } from "../../utils/checkPath.js";

export const cat = async (input, directory) => {
  try {
    const params = await getUserParamsArr(input);
    if (params.length !== 1) throw new Error("Invalid input");
    const filePath = path.join(directory["currentDirectory"], params[0]);
    const isFile = await checkPath(filePath, "file");
    if (!isFile) throw new Error("Invalid path to file");
    const readableStream = createReadStream(filePath, "utf8");
    await new Promise((resolve, reject) => {
      readableStream.on("error", (err) => {
        reject(err);
      });
      readableStream.on("close", () => {
        resolve();
      });
      readableStream.on("data", (chunk) => {
        console.log(chunk);
      });
    });
  } catch (err) {
    let errMessage = "Operation failed";
    if (err.message === "Invalid input") {
      errMessage = "Invalid input";
    }
    console.log(`\x1b[31m${errMessage}\x1b[0m`);
  }
};
