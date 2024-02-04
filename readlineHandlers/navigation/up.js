import path from "path";

export const up = (directory) => {
  try {
    const currentDirectory = directory["currentDirectory"];
    directory["currentDirectory"] = path.resolve(currentDirectory, "..");
  } catch {
    console.log("\x1b[31mOperation failed\x1b[0m");
  }
};
