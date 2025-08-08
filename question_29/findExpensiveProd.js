export function findExpensiveProd(productArr) {
   return productArr.reduce((maxProd, currentProd) => {
        return currentProd.price > maxProd.price ? currentProd : maxProd
    })
}
