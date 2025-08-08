export function findTotalPrice(productArr) {
  return productArr.reduce((sum, product) => sum + product.price, 0);
}
