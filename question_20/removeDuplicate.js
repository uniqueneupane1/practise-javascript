export function removeDuplicate(arr) {
  const newArr = [];

  for (const element of arr) {
    const found = newArr.some(
      (item) => JSON.stringify(item) === JSON.stringify(element)
    );

    if (!found) {
      newArr.push(element);
    }
  }

  return newArr;
}
