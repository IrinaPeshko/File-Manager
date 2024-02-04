export function getUserParamsArr(input) {
  let params = [];

  let splitParams = input.trim().replace(/\s+/g, " ").split(" ");

  if (splitParams.length === 0) return null;

  if (splitParams.length === 1) return [];

  if (splitParams.length > 1) {
    const currentParams = splitParams.slice(1).join(" ");
    const isQuotes = currentParams.match(/"/g);
    if (isQuotes) {
      let newParams = currentParams
        .trim()
        .split(`"`)
        .filter((el) => el !== "")
        .map((el) => el.trim());
      params = newParams;
    } else {
      params = currentParams.split(" ");
    }
    return params;
  }
}
