export function getProduct(productArr) {
  return productArr.filter((product) => product.price > 100);
}
