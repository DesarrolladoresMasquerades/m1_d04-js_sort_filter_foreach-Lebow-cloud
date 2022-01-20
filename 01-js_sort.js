// Class code examples

const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

console.log("Before: ", numbers)

numbers.sort()

console.log("After :", numbers)

console.log(typeof numbers[0]) // Elements stay as numbers

console.log(numbers === numbers.sort()) // Array stays the same "box"

console.log(numbers)

// Passing the sorting criteria using a functon

// Rules are are that TWO elements will be given to your function MUST return -1 0 or 1 according to wether element1 is smaller qeual or greater than element2

// Make a function to .sort() how be want

function sortMyNumbers(el1,el2){
    if(el1 < el2 )return -1
    if(el1 === el2 )return 0
    if(el1 > el2 )return 1
}

console.log("Sorting Numbers:", numbers.sort(sortMyNumbers))

function invSortMyNumbers(el1,el2){
    if(el1 > el2 )return -1
    if(el1 === el2 )return 0
    if(el1 < el2 )return 1
}

console.log("Sorting Numbers:", numbers.sort(invSortMyNumbers))

function quickSort(el1,el2){
    return el1 - el2

}

const students = [
	{firstName: 'John', lastName: 'Carr', age: 34},
  {firstName: 'Leonardo', lastName: 'Di Vittorio', age: 21},
  {firstName: 'Sarah', lastName: 'O\'Connor', age: 45},

]


function sortByAge(student1, student2){

   if(student1.age < student2.age) return -1
   if(student1.age === student2.age) return 0
   if(student1.age > student2.age) return 1

}
function sortByLastName(student1, student2){

   return student1.lastName - student2.lastName

}

console.log("Sort by LastName: ", students.sort(sortByLastName))



