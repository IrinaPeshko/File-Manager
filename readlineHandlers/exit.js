export const exit = (rl) => {
  try {
    rl.close();
    process.exit(0);
  } catch {
    console.log("Operation failed");
  }
};