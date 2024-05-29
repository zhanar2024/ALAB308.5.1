//Lab on reusable functions

// Take an array of numbers and return the sum.

// function findSumofArrNums(arrOfNums) {
//   let sum = 0;
//   for (let num of arrOfNums) {
//     sum += num;
//   }
//   return sum;
// }

// const myArr = [1, 2, 3, 4, 5];
// const result = findSumofArrNums(myArr);
// console.log(result);

// Take an array of numbers and return the average.

// function findAverage(array) {
//   let sum = 0;
//   let average = 0;
//   for (let num of array) {
//     sum += num;
//     average = sum / array.length;
//   }

//   return average;
// }

// const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = findAverage(myArr);
// console.log(result);

// // Take an array of strings and return the longest string.

// function findLongest(arrOfStr) {
//   let longestWord = arrOfStr[0];
//   for (const word of arrOfStr) {
//     if (word.length > longestWord.length) {
//       longestWord = word;
//     }
//   }
//   return longestWord;
// }

// const words = ["i", "be", "you", "cute", "creamy", "bell"];
// const theLongest = findLongest(words);
// console.log(theLongest);

// Take an array of strings, and a number and return an array of the strings that are longer than the given number.

function findLongerThanNum(arr, num) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(findLongerThanNum(["i", "be", "you", "cute", "creamy", "bell"], 2));

// const words2 = ["say", "hello", "in", "the", "morning"];
// let longerWords2 = findLongerThanNum(words2, 3);
// console.log(longerWords2);

// // Take a number, n, and print every number between 1 and n without using loops. Use recursion.

// function printNumbers(n) {
//   if (n > 0) {
//     printNumbers(n - 1);
//     console.log(n);
//   }
// }
// const n = 10;
// printNumbers(n);
