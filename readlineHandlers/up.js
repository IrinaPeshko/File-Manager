import path from "path";

export const up = (directory) => {
    const currentDirectory = directory["currentDirectory"];
    directory["currentDirectory"] = path.resolve(currentDirectory, "..");
}