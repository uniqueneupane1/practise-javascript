export function getTitlesOfProd(productArr) {
  return productArr
    .slice()
    .sort((a, b) => a.price - b.price)
    .map((product) => product.title);
}
