export function getProdPrice(productArr) {
    return productArr.map(product => 2 * product.price);
}