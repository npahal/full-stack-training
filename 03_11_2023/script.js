// logical operators - &&, ||, !
/*
 * && - AND
 * checks left value, if true, then return right value
 * if left value is false, then return left value
 */

/**
 * || - OR
 * checks left value, if false, then return right value
 * if left value is true, then return left value
 */

/**
 * ! - NOT - always returns boolean value
 * if value is true, then return false
 * if value is false, then return true
 */

0 || 0 || (true && false) || 1;

const trueValue = 1,
  falseValue = 0;
const result = trueValue && falseValue && false; // 0
const result1 = trueValue && trueValue; // true

// Logic gates
/**
 * AND gate
 * 0 0 -> 0
 * 0 1 -> 0
 * 1 0 -> 0
 * 1 1 -> 1
 */

/**
 * OR gate
 * 0 0 -> 0
 * 0 1 -> 1
 * 1 0 -> 1
 * 1 1 -> 1
 */

/**
 * NOT gate
 * 0 -> 1
 * 1 -> 0
 */

// falsy values in javascript - 6 values
/**
 * 0
 * false
 * null
 * undefined
 * ''
 * NaN - not a number
 */

if (true) {
  // can execute statements
} else {
}

// ternary operator
/**
 * syntax
 * condition ? true : false
 */

// optional chaining operator - ?.
const obj = {
  name: 'Nitin',
  address: {
    city: 'Delhi',
  },
};

const obj2 = {
  name: 'Nitin',
  address: null,
};

console.log(obj.address.city);

// type operator, typeof

// nested if else, if else chaining

// if else chaining
// if (false) {
//   return;
// } else if (false) {

// } else if (true) {

// } else {

// }

// nested if else
if (false) {
  if (false) {
    if (false) {
    }
  } else {
    if (false) {
    }
  }
}

function clickme() {
  console.log('Button clicked');

  var num = 10;

  if (num === 10) {
    console.log('num is 10');
  }

  // do something
}

// switch case
let myCars; // toyota, maruti, hyundai, volvo

if (myCars === 'toyota') {
  // print toyota
} else if (myCars === 'maruti') {
  // print maruti
} else if (myCars === 'hyundai') {
  // print hyundai
} else if (myCars === 'volvo') {
  // print volvo
}

switch (myCars) {
  case 'toyota':
    // print toyota
    break;
  case 'maruti':
    // print maruti
    break;
  case 'hyundai':
    // print hyundai
    break;
  case 'volvo':
    // print volvo
    break;
  default:
    // print default
    break;
}
