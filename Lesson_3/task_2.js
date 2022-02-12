var count = prompt("Введите количество товаров.");
var cart = [];

for (let i = 0; i < count; i++) {
    let product = [];
    product.push( prompt("Введите ID товара."));
    product.push( prompt("Введите стоимость товара."));
    product.push( prompt("Введите количество товара."));
    cart.push(product);
}

var sum = 0;

for (let i = 0; i < cart.length; i++) {
    sum += Number(cart[i][2]) * Number(cart[i][1]);
}
alert("Итого: " + sum);
