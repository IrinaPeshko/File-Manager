import path from "path";

export const up = (directory) => {
  try {
    const currentDirectory = directory["currentDirectory"];
    directory["currentDirectory"] = path.resolve(currentDirectory, "..");
  } catch {
    console.log("Operation failed");
  }
};
