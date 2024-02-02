import { createReadlineInterface } from "./utils/createReadlineInterface.js";
import { getUserName } from "./utils/getUserName.js";
import os from 'os';

function start() {
  const userNameArg = process.argv[2]?.slice(2);
  const greeting = "Welcome to the File Manager";
  const homeDirectory = os.homedir();

  let userName = "";
  if (userNameArg) {
    userName = getUserName(userNameArg);
  }
  if (!userName) {
    userName = 'Anonymous'
  }
  console.log(`${greeting}, ${userName}!`);
  console.log(`You are currently in ${homeDirectory}`);

  createReadlineInterface(userName, homeDirectory)
}
start()
