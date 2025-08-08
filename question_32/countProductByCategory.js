export function countProductByCategory(productArr) {
  const counts = {};
  for (const prod of productArr) {
    counts[prod.category] = (counts[prod.category] || 0) + 1;
  }
  return counts;
}
