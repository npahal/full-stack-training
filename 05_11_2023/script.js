// calculator

/**
 * - display value
 * - operation
 * - result
 * - functions for operations
 * - 
 */

let displayValue = '0';
let result = '0';

// addign that function to the operation variable
let operation = null;

// operations

// addition
function add(a, b) {
  return a + b;
}

// subtraction
function subtract(a, b) {
  return a - b;
}

// multiplication
function multiply(a, b) {
  return a * b;
}

// division
function divide(a, b) {
  return a / b;
}

// operation - +, -, *, /
function updateOperation(operationType) {
  switch(operationType) {
    case '+':
      operation = add;
      break;
    case '-':
      operation = subtract;
      break;
    case '*':
      operation = multiply;
      break;
    case '/':
      operation = divide;
      break;
    default:
      operation = null;
  }
}

function onNumberClick(num) {
  // if operation is available, and result is 0 then move display value to result

  if (operation && result == 0) {
    result = displayValue;
    displayValue = '0';
  }

  if (displayValue === '0') {
    displayValue = '' + num;
  } else {
    displayValue = displayValue + num;
  }

  updateDisplay();
}

function updateDisplay() {
  document.getElementById('displayValue').innerText = displayValue;
}

(function() {
  updateDisplay();
})()

function calculate() {
  if (operation) {
    result = operation(parseInt(result), parseInt(displayValue)) + '';
    displayValue = result;
    updateDisplay();
  }
}

function allClear() {
  // reset to initial values
  displayValue = '0';
  result = '0';
  operation = null;
  updateDisplay();
}


/**
 * 
 */
