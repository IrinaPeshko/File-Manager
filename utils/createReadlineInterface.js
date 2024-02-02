import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import os from "os";
import url from "node:url";
import { handleInputResult } from "./handleInputResult.js";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export async function createReadlineInterface(username, homeDirectory) {
  const rl = readline.createInterface({ input, output });
  const directory = { currentDirectory: homeDirectory };

  rl.on("line", (input) => {
    handleInputResult(input.trim(), rl, directory);
    console.log(`You are currently in ${directory["currentDirectory"]}`);
  });
 
  rl.on("close", () => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  });
}


