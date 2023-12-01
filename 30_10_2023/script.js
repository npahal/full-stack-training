/**
 * Primitive Data Types
 *
 * Number
 * String
 * Boolean
 * null
 * undefined
 *
 * Non-Primitive Data Types
 *
 * Object
 * Array
 * Function
 */

// this is a single line comment

/*
  this is a multi line comment
 */

// syntax

// code blocks - scoped code
{
  // code
}

// variable declaration - by default undefined value is assigned
var variableName;
// value assignment
variableName = 'value'; // statement

// string
var myString =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis nobis perspiciatis temporibus possimus soluta vel corporis ducimus atque doloremque consequuntur pariatur excepturi ea, aliquam accusamus eum laboriosam, cumque magnam omnis.';

// number
var myNumber = 10;
var myNumber2 = 10.5;

// boolean
var myBoolean = true;

// null
var myNull = null;

// object
/**
 *
 * {
 *   key: value,
 * }
 *
 */

var myObject = {
  name: 'value',
  name2: 'value2',
  obj: {
    name: 'value',
    num: 10,
    obj: {},
  },
  'my name': 'Nitin pahal',
};

myObject.obj.num; // this will return 10
myObject['obj']['num'];
myObject['my name'];

// array
var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

myArray[myArray.length] = 10;
myArray.push(10); // adds 10 at the end of the array

// camelCase
// PascalCase
// kebab-case
// snake_case
// UPPER_CASE

// function
function returnSumOfTwoVariables() {
  // code

  var num = 10;
  var num2 = 20;

  return num + num2;
}


var num3 = returnSumOfTwoVariables(); // function calling syntax

function newFunction() {
  // code
  // this is new function to test git revert
}
