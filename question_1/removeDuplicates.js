export function removeDuplicates(fruits) {
    let afterRemove = [];

    for (let i=0; i<fruits.length; i++) {
        if(!afterRemove.includes(fruits[i])) {
            afterRemove.push(fruits[i]);
        }
    }

    console.log(afterRemove);
}
