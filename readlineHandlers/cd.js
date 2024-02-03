import path from "path";

export const cd = (input, directory) => {
  try {
    const newFilePath = input.slice(2).trim();
    const currentDirectory = directory["currentDirectory"];
    const newPath = path.resolve(currentDirectory, newFilePath);
    directory["currentDirectory"] = newPath;
  } catch {
    console.log('Operation failed');
  }
};
