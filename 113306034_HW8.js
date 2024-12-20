function getNumber1() {
  return parseFloat(document.getElementById('number1').value);
}

function getNumber2() {
  return parseFloat(document.getElementById('number2').value);
}

function getOperator() {
  return document.getElementById('operator').value;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    alert("Cannot divide by zero");
    return null;
  }
  return a / b;
}

function calculate() {
  const number1 = getNumber1();
  const number2 = getNumber2();
  const operator = getOperator();
  let result;

  switch (operator) {
    case '+':
      result = add(number1, number2);
      break;
    case '-':
      result = subtract(number1, number2);
      break;
    case '*':
      result = multiply(number1, number2);
      break;
    case '/':
      result = divide(number1, number2);
      break;
    default:
      result = null;
  }

  if (result !== null) {
    document.getElementById('result').innerText = `Result = ${result.toFixed(2)}`;
  }
}
