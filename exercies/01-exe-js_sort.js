// ONLY USE THE .sort() METHOD FOR THIS EXERCISE UNLESS MENTIONED

//Exercise 1: Using the array (arrOfStrings), sort an array from shortest string to the longest.
// DO NOT mutate the original array
const arrOfStrings = ['cat', 'wolf', 'yo', 'animal'];

const longestStr = (arr1,arr2) => {
   
   if(arr1.length < arr2.length) return -1
   if(arr1.length === arr2.length) return 0
   if(arr1.length > arr2.length) return 1
   
}

console.log("Sort shortest to longest: ", arrOfStrings.sort(longestStr))

let longestStrings = arrOfStrings.sort(longestStr)

console.log(longestStrings) 

//ANSWER should be ['yo', 'cat', 'wolf', 'animal']

//Exercise 2: Using the same arr (arrOfStrings), sort its elements alphabetically.
// DU NOT mutate the original array

// const arrOfStrings = ['cat', 'wolf', 'yo', 'animal'];

const sortedStr = (arr) => {
   
}

// // console.log(arrOfStrings.sort()) 

// let sortedStrings = sortedStr(arrOfStrings)
//  console.log(sortedStrings)

// ANSWER should be  ['animal', 'cat', 'wolf', 'yo']

//  COMPLEX EXERCISE 3: Sort the  objects in the array by age in ascending order,
//  if the age is the same sort them alphabetically in descending order
//  Please do not mutate the original array

const people = [
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Allen', age: 19 },
  { name: 'Nettie', age: 21 },
  { name: 'Stuart', age: 30 },
  { name: 'Bill', age: 19 }
];

const sortByAge = (arr1,arr2) => {

   if(arr1.age === arr2.age) return arr2.name - arr1.name
   return arr1.age - arr2.age
   
  
   
}

let output = people.sort(sortByAge)
console.log(output)
 
/* ANSWER should be
 [
  { name: 'Bill', age: 19 },
  { name: 'Allen', age: 19 },
  { name: 'Nettie', age: 21 },
  { name: 'Candice', age: 25 },
  { name: 'Tammy', age: 30 },
  { name: 'Stuart', age: 30 },
];
*/