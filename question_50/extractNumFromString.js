export function extractNumFromString(str) {
  return str
    .split(/[^0-9]+/)
    .filter(Boolean)
    .map(Number);
}
