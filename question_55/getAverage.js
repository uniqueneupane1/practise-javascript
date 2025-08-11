export function getAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = arr.reduce((total, current) => total + current, 0);
    return sum / arr.length;
}
