export function countEvenAndOddNum(arr) {
    const counts = {even: 0, odd: 0};
    for (const num of arr) {
        if(num % 2 === 0) {
            counts.even += 1;
        } else {
            counts.odd += 1;
        }
    } 
    return counts;
}
