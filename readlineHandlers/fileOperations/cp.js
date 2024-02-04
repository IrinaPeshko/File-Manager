import path from "path";
import { createReadStream, createWriteStream, promises as fs } from "fs";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";
import { checkPath } from "../../utils/checkPath.js";

export const cp = async (input, directory) => {
  try {
    const params = getUserParamsArr(input);
    if (params.length !== 2) throw new Error("Enter correct params");

    const baseFilePath = path.resolve(directory["currentDirectory"], params[0]);
    const isFile = await checkPath(baseFilePath, "file");
    if (!isFile) throw new Error("file does not exist");

    const newFileDirectory = path.resolve(directory["currentDirectory"], params[1]);
    const isDirectory = await checkPath(newFileDirectory, "dir");
    if (!isDirectory) throw new Error("directory does not exist");
    
    const fileName = path.basename(baseFilePath);
    const newFilePath = path.join(newFileDirectory,fileName)

    await new Promise((resolve, reject) => {
        const readStream = createReadStream(baseFilePath);
        const writeStream = createWriteStream(newFilePath, { flags: "wx" });
        readStream.on("error", (e) => reject(`reading error: ${e.message}`));
        writeStream.on("error", (e) => reject(`writing error: ${e.message}`));
        writeStream.on("close", resolve);
        readStream.pipe(writeStream);
    })
  } catch (err) {
    console.log("Operation failed");
  }
};
