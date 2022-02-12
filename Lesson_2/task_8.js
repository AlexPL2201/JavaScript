function power(val, pow) {
  if (pow == 1) {
    return val;
  } else {
    return val * power(val, pow - 1);
  }
}

var val = prompt("Введите число.");
var pow = prompt("Введите степень.");

alert("Result: " + power( Number(val), Number(pow)));
