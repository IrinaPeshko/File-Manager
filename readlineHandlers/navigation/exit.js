export const exit = (rl) => {
  try {
    rl.close();
    process.exit(0);
  } catch {
    console.log("\x1b[31mOperation failed\x1b[0m");
  }
};