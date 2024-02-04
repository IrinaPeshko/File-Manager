import { add } from "../readlineHandlers/fileOperations/add.js";
import { cat } from "../readlineHandlers/fileOperations/cat.js";
import { cd } from "../readlineHandlers/navigation/cd.js";
import { exit } from "../readlineHandlers/navigation/exit.js";
import { ls } from "../readlineHandlers/navigation/ls.js";
import { rn } from "../readlineHandlers/fileOperations/rn.js";
import { up } from "../readlineHandlers/navigation/up.js";
import { cp } from "../readlineHandlers/fileOperations/cp.js";
import { mv } from "../readlineHandlers/fileOperations/mv.js";

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
    await cd(input, directory)
  } else if (input.startsWith("cat")) {
    await cat(input, directory)
  } else if (input.startsWith("add")) {
    await add(input, directory)
  } else if (input.startsWith("rn")) {
    await rn(input, directory)
  } else if (input.startsWith("cp")) {
    await cp(input, directory)
  } else if (input.startsWith("mv")) {
    await mv(input, directory)
  } else {
    console.log(`Invalid input`);
  }
}
