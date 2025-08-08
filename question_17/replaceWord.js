export function replaceWord(arr, prevWord, newWord) {
    return arr.map(word => (word === prevWord ? newWord : word));
}
