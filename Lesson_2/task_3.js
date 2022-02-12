var a = prompt("Введите a");
var b = prompt("Введите b");
if (a >= 0 && b >= 0) {
  alert("Разность: " + Math.abs(a - b));
} else if (a < 0 && b < 0) {
  alert("Произведение: "(a * b));
} else {
  alert("Сумма: " + ( Number(a) + Number(b)));
}
