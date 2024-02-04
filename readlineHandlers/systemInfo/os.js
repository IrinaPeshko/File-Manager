import * as os from "os";
import { getUserParamsArr } from "../../utils/getUserParamsArr.js";

export const getSystemInfo = async (input, directory) => {
  try {
    const params = await getUserParamsArr(input);
    if (params.length !== 1 || !params[0].startsWith("--"))
      throw new Error("Invalid input");
    const operation = params[0].slice(2).trimRight();
    switch (operation) {
      case "EOL":
        const eolValue = JSON.stringify(os.EOL);
        console.log(
          `End-Of-Line (EOL) for the current system: ${JSON.stringify(
            eolValue
          )}`
        );
        break;
      case "cpus":
        const cpusInfo = os.cpus();
        console.log(`Overall amount of CPUs: ${cpusInfo.length}`);
        console.table(
          cpusInfo.map((cpu) => ({
            Model: cpu.model,
            "Clock Rate (GHz)": cpu.speed / 1000,
          }))
        );
        break;
      case "homedir":
        const homeDirectory = os.homedir();
        console.log(`Home Directory: ${homeDirectory}`);
        break;
      case "username":
        const username = os.userInfo().username;
        console.log(`System Username: ${username}`);
        break;
      case "architecture":
        const architecture = process.arch;
        console.log(`Node.js Binary CPU Architecture: ${architecture}`);
        break;
      default:
        throw new Error("Invalid input");
    }
  } catch (err) {
    let errMessage = "Operation failed";
    if (err.message === "Invalid input") {
      errMessage = "Invalid input";
    }
    console.log(`\x1b[31m${errMessage}\x1b[0m`);
  }
};
