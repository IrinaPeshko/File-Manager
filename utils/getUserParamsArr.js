export function getUserParamsArr(input) {
  let params = [];

  let splitParams = input.trim().replace(/\s+/g, " ").split(" ");

  if (splitParams.length === 0) return null;

  if (splitParams.length === 1) return [];

  if (splitParams.length > 1) {
    const currentParams = input
      .trim()
      .replace(/^[^\s]+(\s|$)/, "")
      .trim();
    const isQuotes = currentParams.match(/"/g);
    if (isQuotes) {
      let newParams = currentParams
        .split(`"`)
        .filter((el) => el !== "")
        .map((el) => el.trim());
      params = newParams;
    } else {
      params = currentParams.replace(/\s+/g, " ").split(" ");
    }
    return params;
  }
}
