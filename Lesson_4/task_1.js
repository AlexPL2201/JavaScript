function makeObj(val) {
  let obj = {};
  if (val <= 999){
    let digit;
    let counter = 0
    while (val != 0) {
      digit = val % 10;
      if (counter == 0) obj['Единицы'] = digit;
      else if (counter == 1) obj['Десятки'] = digit;
      else obj['Сотни'] = digit;
      val = (val - digit) / 10;
      counter++;
    }
  return obj;
  } else return obj;
}

const num = prompt("Введи число от 0 до 999.");
console.log( makeObj(num));
