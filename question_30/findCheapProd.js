export function findCheapProd(productArr) {
    return productArr.reduce((minProd, currentProd) => currentProd < minProd ? currentProd : minProd)
}
