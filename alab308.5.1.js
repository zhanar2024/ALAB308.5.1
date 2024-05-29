//Lab on reusable functions

//Take an array of numbers and return the sum.

function findSumofArrNums(arrOfNums) {
  let sum = 0;
  for (let num of arrOfNums) {
    sum += num;
  }
  return sum;
}

const myArr1 = [1, 2, 3, 4, 5];
const result1 = findSumofArrNums(myArr1);
console.log(result1);

//Take an array of numbers and return the average.

function findAverage(array) {
  let sum = 0;
  let average = 0;
  for (let num of array) {
    sum += num;
    average = sum / array.length;
  }

  return average;
}

const myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = findAverage(myArr);
console.log(result);

// Take an array of strings and return the longest string.

function findLongest(arrOfStr) {
  let longestWord = arrOfStr[0];
  for (const word of arrOfStr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

const words = ["i", "be", "you", "cute", "creamy", "bell"];
const theLongest = findLongest(words);
console.log(theLongest);

//Take an array of strings, and a number and return an array of the strings that are longer than the given number.

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

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.

function printNumbers(n) {
  if (n > 0) {
    printNumbers(n - 1);
    console.log(n);
  }
}
const n = 10;
printNumbers(n);

//Part 2 -Thinking Methodically

const data = [
  { id: "42", name: "Bruce", occupation: "Knight", age: "41" },
  { id: "48", name: "Barry", occupation: "Runner", age: "25" },
  { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
  { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
  { id: "7", name: "Bilbo", occupation: "None", age: "111" },
];

// Sorting the array by age
const sortedByAge = data.sort((a, b) => parseInt(a.age) - parseInt(b.age));
console.log(sortedByAge);

// Filtering the array to remove entries with an age greater than 50
const filteredByAge = data.filter((entry) => parseInt(entry.age) <= 50);

console.log(filteredByAge);

// Calculating the sum of the ages using the reduce method
const sumOfAges = data.reduce((total, entry) => total + parseInt(entry.age), 0);

console.log("Sum of ages:", sumOfAges);

// Calculating the average age
const averageAge = sumOfAges / data.length;

console.log("Average age:", averageAge);

//Part 3 - Thinking Critically
