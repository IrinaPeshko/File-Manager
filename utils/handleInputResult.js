import { cd } from "../readlineHandlers/cd.js";
import { ls } from "../readlineHandlers/ls.js";
import { up } from "../readlineHandlers/up.js";
import path from "path";

export async function handleInputResult(input, rl, directory) {
  if (input === "hello") {
    console.log("hi hi");
  } else if (input === "up") {
    up(directory);
  } else if (input === "ls") {
    await ls(directory)
  } else if (input === ".exit") {
    rl.close();
    process.exit(0);
  } else if (input.startsWith("cd")) {
    cd(input, directory)
  } else {
    console.log(`Invalid input`);
  }
}
