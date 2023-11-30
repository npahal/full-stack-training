// reserved keywords - var, function, return, let, const, if, else, for, while, Math, Date ....
// var return = "nitin";

// functions
function myFunction() {
  // code block
  console.log("Hello from myFunction");
}

// anonymous function
var myFunction2 = function() {
  // code block
  console.log("Hello from anonymous function");
};

// self-invoking function
(function() {
  // code block
  console.log("Hello from self-invoking function");
})()

var num = 10;
var num2 = 20;

// parameters, return types
function returnSumOfTwoVariables() {
  // code
  return num + num2;
}

returnSumOfTwoVariables(); // return 30

num = 20;
num2 = 30;

returnSumOfTwoVariables(); // return 50

function returnSumOfTwoVariables2(param1) {
  var v = param1();
  // code
  return param1 + param2;
}
returnSumOfTwoVariables2(function() { return 10 }); // return 30

// arrow functions - ES6 feature
var returnSumOfTwoVariables3 = (param1 /** this is a parameter */, param2) => param1 + param2

function returnMutipliedByTwo (num) {
  return num * 2;
}
var returnMutipliedByTwo = num => num * 2;

var parentFunction = (childFunction) => {
  return childFunction();
}

parentFunction(() => {
  var abs = 'hello';
  abs = 10;
});

// hoisting
// variables inside functions, scope
// let, const

