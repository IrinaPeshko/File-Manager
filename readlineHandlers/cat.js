import { createReadStream } from "fs";
import path from "path";

export const cat = async (input, directory) => {
  try {
    const currentFile = input.slice(3).trim();
    const filePath = path.join(directory["currentDirectory"], currentFile);
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
    console.log("Operation failed");
  }
};
