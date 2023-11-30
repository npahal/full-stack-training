console.log(variable1, variable2);

myFunction();

function myFunction() {
  var innerVar = 'test';
  console.log("Hello from myFunction", innerVar);
}

var myFunction2 = function () {
  console.log("Hello from anonymous function");
};

(function () {
  var innerVar1;
  console.log(innerVar1);
  innerVar1 = 'test'
  console.log("Hello from self-invoking function", innerVar1);
})();

var variable1 = 10, variable2 = 20;

console.log(variable1, variable2);

================================================
// hoisting - all the declarations are moved to the top of the scope

function myFunction() {
  console.log("Hello from myFunction");
}
var myFunction2, variable1, variable2;

console.log(variable1, variable2);

myFunction();

myFunction2 = function () {
  console.log("Hello from anonymous function");
};

(function () {
  console.log("Hello from self-invoking function");
})();

variable1 = 10;
variable2 = 20;

console.log(variable1, variable2);

// if else statements
var todayDate = 10;

if (todayDate < 10) {
  let variable1 = 10;
  // execute this block
  console.log("Today is less than 10");
} else {
  console.log("Today is greater than 9");
}

console.log(variable1); // error

// let, const

const pi = 3.14;
pi = 3.15; // error

// operators
// assignment operators
var num = 10;
num = num + 10; // new value from num would be 20

num += 10; // new value from num would be 30

num -= 10; // new value from num would be 20

// arithmetic operators
// +, -, *, /, %
var ans = 12/10 // 1.2 - return result after complete division
var ans = 12%10 // 2 - returns remainder after complete division

/**
 * total results 102
 * per page results 20
 * 
 * 102%20 = 2
 */
const totalResults = 102;
const perPageResults = 20;
let remainder = totalResults % perPageResults;

if (remainder > 0) {
  // add 1 in total pages
}

// increment ++, decrement --
let num = 10;
num++; // 11
num--; // 10

// comparison operators
// ==, ===, !=, !==, >, <, >=, <=

10 == 10 // true
10 != 10 // false
11 != 10 // true
10 === '10' // false
10 !== '10' // true
