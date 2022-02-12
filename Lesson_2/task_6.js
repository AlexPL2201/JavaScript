function mathOperation(a, b, operation) {
  switch (operation) {
    case "+":
      return a + b;
      break;

    case "-":
      return a - b;
      break;

    case "*":
      return a * b
      break;

    case "/":
      return a / b;
      break;

    default:
      alert("Допускаемые операции (+, -, *, /).")
    }
}

var a = prompt("Введите 1-ое число.");
var operation = prompt("Введите операцию(+, -, *, /).");
var b = prompt("Введите 2-ое число.");

alert("Result: " + mathOperation( Number(a), Number(b), operation));
