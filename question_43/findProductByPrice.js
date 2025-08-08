export function findProductByPrice(productArr) {
    return productArr.filter(product => product.price > 10000);
}
