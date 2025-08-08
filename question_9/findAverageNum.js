export function findAverageNum(array) {
    const sum = array.reduce((total, num) => total + num, 0); 
    const average = sum / array.length;
    return average;   
}
