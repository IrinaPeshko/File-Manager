import path from "path";
import { createReadStream, createWriteStream, promises as fs } from "fs";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";
import { checkPath } from "../../utils/checkPath.js";

export const mv = async (input, directory) => {
  try {
    const params = getUserParamsArr(input);
    if (params.length !== 2) throw new Error("Invalid input");

    const baseFilePath = path.resolve(directory["currentDirectory"], params[0]);
    const isFile = await checkPath(baseFilePath, "file");
    if (!isFile) throw new Error("Invalid path to file");

    const newFileDirectory = path.resolve(
      directory["currentDirectory"],
      params[1]
    );
    const isDirectory = await checkPath(newFileDirectory, "dir");
    if (!isDirectory) throw new Error("Invalid path to directory");

    const fileName = path.basename(baseFilePath);
    const newFilePath = path.join(newFileDirectory, fileName);

    await new Promise((resolve, reject) => {
      const readStream = createReadStream(baseFilePath);
      const writeStream = createWriteStream(newFilePath, { flags: "wx" });
      readStream.on("error", (e) => reject(`reading error: ${e.message}`));
      writeStream.on("error", (e) => reject(`writing error: ${e.message}`));
      writeStream.on("close", resolve);
      readStream.pipe(writeStream);
      writeStream.on("finish", async () => {
        await fs.unlink(baseFilePath);
        resolve();
      });

      writeStream.on("error", reject);
    });
  } catch (err) {
    let errMessage = "Operation failed";
    if (err.message === "Invalid input") {
      errMessage = "Invalid input";
    }
    console.log(`\x1b[31m${errMessage}\x1b[0m`);
  }
};
