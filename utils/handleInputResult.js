import { add } from "../readlineHandlers/add.js";
import { cat } from "../readlineHandlers/cat.js";
import { cd } from "../readlineHandlers/cd.js";
import { exit } from "../readlineHandlers/exit.js";
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
    exit(rl)
  } else if (input.startsWith("cd")) {
    cd(input, directory)
  } else if (input.startsWith("cat")) {
    await cat(input, directory)
  } else if (input.startsWith("add")) {
    add(input, directory)
  } else {
    console.log(`Invalid input`);
  }
}
