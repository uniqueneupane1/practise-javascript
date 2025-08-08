export function getPrices(productArr) {
  return productArr
    .filter((product) => product.discount.type === "seasonal")
    .map((product) => product.price);
}
