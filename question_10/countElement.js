export function countElement(arr) {
    const counts = {};
    for (let i = 0; i < arr.length; i++) {
        const fruit = arr[i];
        if (counts[fruit]) {
            counts[fruit]++;
        } else {
            counts[fruit] = 1;
        }
    }
    return counts;
}
