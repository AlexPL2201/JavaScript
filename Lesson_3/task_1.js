var a = [];
var lst = [];

for (let i = 0; i <= 100; i++) {
  a.push(i);
}

a[1] = 0;
i = 2;

while (i <= 100) {
  if (a[i] != 0) {
    lst.push(a[i]);
    let j = i

    while (j <= 100) {
      a[j] = 0;
      j += i
    }
  }
  i++;
}

console.log(lst);
