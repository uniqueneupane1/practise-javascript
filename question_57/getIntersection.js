export function getIntersection(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
}
