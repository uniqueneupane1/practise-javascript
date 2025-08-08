export function getTitles(productArr) {
  return productArr
    .filter((product) => product.category === "stationery")
    .map((product) => product.title);
}
