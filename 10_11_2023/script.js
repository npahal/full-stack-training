// loops - for, while, do while, for of, for in

// for loop syntax
// loop to print numbers from 0 to 100
for (let iterator = 0; iterator <= 100; iterator++) {
  // code block
  console.log(iterator);
}
console.log(iterator);
let i = 0;

for (; i < 10;) {
  console.log(i);
  i++;
}

// while loop syntax
while(i < 10) {
  console.log(i);
  i++;
}

// do while loop syntax

do {
  console.log(i);
  i++;
}
while(i < 10);

// Array methods - push, pull, shift, unshift, slice, splice, forEach, map, filter, reduce, find, sort
const arr = ['A', 'B', 'C'];

const callback = function (currentItem, currentIndex, array) {
  console.log(currentItem, currentIndex, array);
}

for (let a = 0; a < arr.length; a++) {
  callback(arr[a], a, arr)
}

// callback function
arr.forEach(function (item, index, array) {
  console.log(item);
})

// push - push the passed element at the end of array and return the new length of the array
arr.push('D');

// pop - remove the last element from the array and return the removed element
arr.pop();

// unshift - push the passed element at the beginning of array and return the new length of the array
arr.unshift('Z');

// shift - remove the first element from the array and return the removed element
arr.shift();

// slice - return the new array from the given start index to end index
// syntax - arr.slice(startIndex, endIndex)
// return the new array from the given start index to end index and end index is not included
// it does not modify the original array
arr.slice(1, 2); // return ['B']

// splice - return the new array from the given start index to end index
// syntax - arr.splice(startIndex, numberOfElementsToRemove, elementsToReplace)
// return the new array from the given start index to the count of numberOfElementsToRemove
// it modifies the original array
arr.splice(1, 2); // return ['B', 'C']

// map - receives a callback function which can receive three parameters - currentItem, currentIndex, array
// it always returns a new array
// it does not modify the original array


// string methods
