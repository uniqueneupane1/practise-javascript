export function getProductsByPrice(productArr) {
  return productArr.filter(
    (product) => product.price > 100 && product.price < 1000
  );
}
