import path from "path";
import { createReadStream, createWriteStream, promises as fs } from "fs";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";
import { checkPath } from "../../utils/checkPath.js";
import zlib from "zlib";

export const compress = async (input, directory) => {
  try {
    const params = await getUserParamsArr(input);
    if (params.length !== 2) throw new Error("Invalid input");

    const sourceFile = path.resolve(directory["currentDirectory"], params[0]);
    const destinationFile = path.resolve(
      directory["currentDirectory"],
      params[1]
    );

    const isFile = await checkPath(sourceFile, "file");
    if (!isFile) throw new Error("Source file does not exist");

    const readStream = createReadStream(sourceFile);
    const writeStream = createWriteStream(destinationFile);
    let compressStream;
    if (input.startsWith("compress")) {
      compressStream = zlib.createBrotliCompress();
    } else if (input.startsWith("decompress")) {
      compressStream = zlib.createBrotliDecompress();
    } else {
        throw new Error("Invalid input")
    }
    await new Promise((resolve, reject) => {
      readStream.on("error", (e) => reject(`reading error: ${e.message}`));
      writeStream.on("error", (e) => reject(`writing error: ${e.message}`));
      compressStream.on("error", (e) => reject(`writing error: ${e.message}`));
      writeStream.on("close", resolve);
      readStream.pipe(compressStream).pipe(writeStream);
      writeStream.on("finish", () => {
        console.log(`Success! The result is on ${destinationFile}`);
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
