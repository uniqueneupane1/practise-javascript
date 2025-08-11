import { removeDuplicates} from './question_1/removeDuplicates.js';
import { countElement } from './question_10/countElement.js';
import { flattenNestedArray } from './question_11/flattenNestedArray.js';
import { splitArray } from './question_12/splitArray.js';
import { stringToUppercase } from './question_13/stringToUppercase.js';
import { stringToLowercase } from './question_14/stringToLowercase.js';
import { capitalizeString } from './question_15/capitalizeString.js';
import { arrayToSent } from './question_16/arrayToSent.js';
import { replaceWord } from './question_17/replaceWord.js';
import { findStrings } from './question_18/findStrings.js';
import { findLengthOfString } from './question_19/findLengthOfString.js';
import { mergeAndRemoveDuplicates } from './question_2/mergeArray.js';
import { removeDuplicate } from './question_20/removeDuplicate.js';
import { countTotalChar } from './question_21/countTotalChar.js';
import { getProductTitles } from './question_22/getProductTitles.js';
import { getProductCat } from './question_23/getProductCat.js';
import { getProdPrice } from './question_24/getProdPrice.js';
import { getProduct } from './question_25/getProduct.js';
import { getTitles } from './question_26/getTitles.js';
import { getPrices } from './question_27/getPrices.js';
import { getTitlesOfProd } from './question_28/getTitlesOfProd.js';
import { findExpensiveProd } from './question_29/findExpensiveProd.js';
import { stringCapitalize } from './question_3/stringCapitalize.js';
import { findCheapProd } from './question_30/findCheapProd.js';
import { findTotalPrice } from './question_31/findTotalPrice.js';
import { countProductByCategory } from './question_32/countProductByCategory.js';
import { getProductsByPrice } from './question_33/getProductsByPrice.js';
import { convertNumToSquare } from './question_34/convertNumToSquare.js';
import { convertPricesToString } from './question_35/convertPricesToString.js';
import { sortNumInAscending } from './question_36/sortNumInAscending.js';
import { sortNumInDescendig } from './question_37/sortNumInDescending.js';
import { removeFalsyValues } from './question_38/removeFalsyValues.js';
import { checkEvenNum } from './question_39/checkEvenNum.js';
import { generateText } from './question_4/generateText.js';
import { checkNum } from './question_40/checkNum.js';
import { countEvenAndOddNum } from './question_41/countEvenAndOddNum.js';
import { findIndexOfNum } from './question_42/findIndexOfNum.js';
import { findProductByPrice } from './question_43/findProductByPrice.js';
import { reverseString } from './question_44/reverseString.js';
import { countVowels } from './question_45/countVowels.js';
import { checkPalinrome } from './question_46/checkPalindrom.js';
import { replaceSpaceWithDash } from './question_47/replaceSpaceWithDash.js';
import { capitalizeFirstLetter } from './question_48/capitalizeFirstLetter.js';
import { removeNumFromString } from './question_49/removeNumFromString.js';
import { reverseArray } from './question_5/reverseArray.js';
import { extractNumFromString } from './question_50/extractNumFromString.js';
import { checkPrimeNum } from './question_51/checkPrimeNum.js';
import { findFactorial } from './question_52/findFactorial.js';
import { getUniqueElements } from './question_53/getUniqueElements.js';
import { getReverseString } from './question_54/getReverseString.js';
import { getAverage } from './question_55/getAverage.js';
import { isLeapYear } from './question_56/isLeapYear.js';
import { getIntersection } from './question_57/getintersection.js';
import { getFormattedNum } from './question_58/getFormattedNum.js';
import { isAllNum } from './question_59/IsAllNum.js';
import { sumNumInArray } from './question_6/sumNumInArray.js';
import { findLargestNum } from './question_7/findLargestNum.js';
import { findSmallestNum } from './question_8/findSmallestNum.js';
import { findAverageNum } from './question_9/findAverageNum.js';


// Question 1
const fruits = ["apple", "banana", "apple", "orange", "banana"];
console.log(removeDuplicates(fruits));

//Question 2
const arr1 = ["a", "b"];
const arr2 = ["b", "c"];

const mergedArray = mergeAndRemoveDuplicates(arr1, arr2);
console.log(mergedArray);


//Question 3
const arr = ["my", "name", "is"];
console.log(stringCapitalize(arr));

//Question 4
const array = ["My", "Name", "is", "Unique"];
console.log(generateText(array));

//Question 5
const number = [1, 2, 3];
console.log(reverseArray(number));

//Question 6
const numArray = [10, 20, 30];
console.log(sumNumInArray(numArray));

//Question 7
const findLargeNum = [1, 7, 3, 9];
console.log(findLargestNum(findLargeNum));

//Question 8
const findSmallNum = [5, 2, 8, 1];
console.log(findSmallestNum(findSmallNum));

//Question 9
const findAvgNum = [2, 4, 6, 8];
console.log(findAverageNum(findAvgNum));

//Question 10
const fruitsArray = ["apple", "banana", "apple"];
console.log(countElement(fruitsArray));

//Question 11
const nestedArray = [1, [2, [3, 4]], 5];
console.log(flattenNestedArray(nestedArray));

//Question 12
const splitAnArray = [1, 2, 3, 4, 5, 6];
const size = 2;
console.log(splitArray(splitAnArray, size));

//Question 13
const arr13 = ["a", "b", "c"];
console.log(stringToUppercase(arr13));

//Question 14
const arr14 = ["A", "B", "C"];
console.log(stringToLowercase(arr14));

//Question 15
const arr15 = ["hello", "world"];
console.log(capitalizeString(arr15));

//Question 16
const arr16 = ["I", "love", "coding"];
console.log(arrayToSent(arr16));

//Question 17
const arr17 = ["I", "am", "Unique"];
console.log(replaceWord(arr17, "Unique", "John"));

//Question 18
const arr18 = ["apple", "bat", "cat", "banana"];
console.log(findStrings(arr18, 4));

//Question 19
const arr19 = ["a", "bb", "ccc"];
console.log(findLengthOfString(arr19));

//Question 20
const arr20 = [1, 2, 1, ["a", "b"], ["a", "b"]];
console.log(removeDuplicate(arr20));

//Question 21
const arr21 = ["Hi", "Unique"];
console.log(countTotalChar(arr21));

//Question 22
let products = [
  { id: 1, title: "Pen", category: "stationery", price: 10, discount: { type: "none" } },
  { id: 2, title: "Shirt", category: "clothing", price: 500, discount: { type: "seasonal" } },
  { id: 3, title: "Phone", category: "electronics", price: 20000, discount: { type: "festival" } },
  { id: 4, title: "Notebook", category: "stationery", price: 50, discount: { type: "none" } }
];
console.log(getProductTitles(products));

//Question 23
console.log(getProductCat(products));

//Question 24
console.log(getProdPrice(products));

//Question 25
console.log(getProduct(products));

//Question 26
console.log(getTitles(products));

//Question 27
console.log(getPrices(products));

//Question 28
console.log(getTitlesOfProd(products));

//Question 29
console.log(findExpensiveProd(products));

//Question 30
console.log(findCheapProd(products));

//Question 31
console.log(findTotalPrice(products));

//Question 32
console.log(countProductByCategory(products));

//Question 33
console.log(getProductsByPrice(products));

//Question 34
const arr34 = [2, 3, 4];
console.log(convertNumToSquare(arr34));

//Question 35
const price = [100, 200];
console.log(convertPricesToString(price));

//Question 36
const arr36 = [6, 1, 0, 10, 50, 1900, 2];
console.log(sortNumInAscending(arr36));

//Question 37
const arr37 = [10, 1, 5, 9, 3];
console.log(sortNumInDescendig(arr37));

//Question 38
const arr38 = [0, 1, false, 2, "", 3];
console.log(removeFalsyValues(arr38));

//Question39
const arr39 = [2, 8, 0, 10, 20]
console.log(checkEvenNum(arr39));

//Question40
const arr40 = [5, 3, 2, 100, 500];
console.log(checkNum(arr40));

//Question41
const arr41 = [2, 3, 4, 5, 6, 10, 20];
console.log(countEvenAndOddNum(arr41));

//Question42
const arr42 = [10, 30, 45, 50, 55, 60, 70, 80];
console.log(findIndexOfNum(arr42));

//Question43
console.log(findProductByPrice(products));

//Question44
const str44 = "Unique";
console.log(reverseString(str44));

//Question45
const str45 = "Hello World";
console.log(countVowels(str45));

//Question46
const str46 = "madam";
console.log(checkPalinrome(str46));

//Question47
const str47 = "My name is Unique";
console.log(replaceSpaceWithDash(str47));

//Question48
const str48 = "my name is unique";
console.log(capitalizeFirstLetter(str48));

//Question49
const str49 = "My number is 1234";
console.log(removeNumFromString(str49));

//Question50
const str50 = "abc123def45";
console.log(extractNumFromString(str50));

//Question51
const num51 = 7;
console.log(checkPrimeNum(num51));

//Question52
const num52 = 5;
console.log(findFactorial(num52));

//Question53
const arr53 = [1, 2, 2, 3];
console.log(getUniqueElements(arr53));

//Question54
const str54 = "I love coding";
console.log(getReverseString(str54));

//Question55
const arr55 = [1, 2, 3, 4, 5];
console.log(getAverage(arr55));

//Question56
const year = 2000;
console.log(isLeapYear(year));

//Question57
const arr57 = [1, 2, 3];
const arr58 = [2, 3, 4];
console.log(getIntersection(arr57, arr58));

//Question58
const largeNum = 150000;
console.log(getFormattedNum(largeNum));

//Question59
const arr59 = [1, 2, 3];
console.log(isAllNum(arr59));
