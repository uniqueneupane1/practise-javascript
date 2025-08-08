export function convertPricesToString(pricesArr) {
   return pricesArr.map(price => `$${price}`);
}
