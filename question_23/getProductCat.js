export function getProductCat(productArr) {
    const prodCat = [...new Set(productArr.map(product => product.category))];

    return prodCat;
}
