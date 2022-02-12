function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

var a = prompt("Введите 1-ое число.");
var operation = prompt("Введите операцию(+, -, *, /).");
var b = prompt("Введите 2-ое число.");

switch (operation) {
  case "+":
    alert( sum(Number(a), Number(b)));
    break;

  case "-":
    alert( subtract(Number(a), Number(b)));
    break;

  case "*":
    alert( multiply(Number(a), Number(b)));
    break;

  case "/":
    alert( divide(Number(a), Number(b)));
    break;

  default:
    alert("Допускаемые операции (+, -, *, /).");
}
