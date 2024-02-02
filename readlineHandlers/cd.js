import path from "path";

export const cd = (input, directory) => {
    const newFilePath = input.slice(2).trim();
    const currentDirectory = directory['currentDirectory'];
    const newPath = path.resolve(currentDirectory, newFilePath);
    directory['currentDirectory'] = newPath;
}