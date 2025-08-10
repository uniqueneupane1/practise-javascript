export function removeNumFromString(str) {
  return str
    .split("")
    .filter(char => !Number.isInteger(parseInt(char)))
    .join("");
}
