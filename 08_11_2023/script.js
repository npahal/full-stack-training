// calculator

/**
 * - display value
 * - operation
 * - result
 * - functions for operations
 * -
 */

let displayValue = '0';
let result = null;

// addign that function to the operation variable
let operation = null;
let operationType = null;

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
function updateOperation(type) {
  if (operation && result == null) {
    // if result is null and operation is already presen then it is initial state then do nothing
    return;
  }

  if (operation) {
    /**
     * if operation is available and then user click on another operation
     * then calculate the result and update the display value and update operation
     */
    calculate();
    operation = null;
    operationType = null;
  }

  switch (type) {
    case '+':
      operation = add;
      operationType = type;
      break;
    case '-':
      operation = subtract;
      operationType = type;
      break;
    case '*':
      operation = multiply;
      operationType = type;
      break;
    case '/':
      operation = divide;
      operationType = type;
      break;
    default:
      operation = null;
      operationType = null;
  }

  updateDisplay();
}

function onNumberClick(num) {
  if (num === '.' && displayValue.includes('.')) {
    // if decimal is already present in display value then do nothing
    return;
  }

  if (operation && result == null) {
    // if operation is available, and result is null then move display value to result
    result = displayValue;
    displayValue = '0'; // this is done to make next if statment work
  }

  if (displayValue == '0') {
    displayValue = '' + num;
  } else {
    displayValue = displayValue + num;
  }

  updateDisplay();
}

function updateDisplay() {
  document.getElementById('displayValue').innerText = displayValue;
  document.getElementById('operation').innerText = operationType;
}

(function () {
  updateDisplay();
})();

function calculate() {
  if (operation) {
    displayValue = operation(parseFloat(result), parseFloat(displayValue)) + '';
    result = null;
    operation = null;
    operationType = null;
    updateDisplay();
  }
}

function allClear() {
  // reset to initial values
  displayValue = '0';
  result = null;
  operation = null;
  operationType = null;
  updateDisplay();
}
