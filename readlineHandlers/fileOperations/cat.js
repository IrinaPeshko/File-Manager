import { createReadStream } from "fs";
import path from "path";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";
import { checkPath } from "../../utils/checkPath.js";

export const cat = async (input, directory) => {
  try {
    const params = await getUserParamsArr(input);
    if (params.length !== 1) throw new Error('Invalid params');
    const filePath = path.join(directory["currentDirectory"], params[0]);
    const isFile = await checkPath(filePath, 'file');
    if (!isFile) throw new Error('Invalid params');
    const readableStream = createReadStream(filePath, 'utf8');
    await new Promise((resolve, reject) => {
      readableStream.on("error", (err) => {
        reject(err);
      });
      readableStream.on("close", () => {
        resolve();
      });
      readableStream.on('data', (chunk) => {
        console.log(chunk);
      })
    });
  } catch {
    console.log("\x1b[31mOperation failed\x1b[0m");
  }
};
