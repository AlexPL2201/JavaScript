const myCart = {
  products: [{
    id: 54321,
    title: "Ноутбук",
    price: 70000,
    count: 1
  },
  {
    id: 12345,
    title: "Видеокарта",
    price: 40000,
    count: 3
  },
  {
    id: 9876,
    title: "Процессор",
    price: 35000,
    count: 2
  }],
      
  init() {
    for (let i = 0; i < this.products.length; i++) {
      const divProduct = document.createElement("div");
      divProduct.classList.add("product" + i, 'product')
      const productTitle = document.createElement('h2');
      const productPrice = document.createElement('h2');
      const productCount = document.createElement('h2');

      productTitle.innerHTML = "Наименование: " + "<i style='color: #858183'>" + this.products[i].title + "</i>";
      productPrice.innerHTML = "Стоимость: " + "<i style='color: #858183'>" + this.products[i].price + "</i>";
      productCount.innerHTML = "Количество: " + "<i style='color: #858183'>" + this.products[i].count + "</i>";

      divProduct.appendChild(productTitle);
      divProduct.appendChild(productPrice);
      divProduct.appendChild(productCount);

      document.getElementById("list").appendChild(divProduct);
    }
    const btn = document.createElement('button');
    btn.id = 'btn';
    btn.className = 'btn';
    btn.innerHTML = '<h3>Рассчитать</h3>'
    document.getElementById("calculate").appendChild(btn);
    btn.addEventListener("click", this.countMe);
  },
  
  countMe() {
    let res = 0;
    for (let i = 0; i < myCart.products.length; i++) {
      res += myCart.products[i].price * myCart.products[i].count;
    }
    btn = document.getElementById("btn");
    btn.style.display = 'none';

    divCounted = document.createElement('div');
    divCounted.innerHTML = "<h2>Выбрано " + "<i style='color: #858183'>" + myCart.products.length + "</i> товара(ов) на сумму: " + "<i style='color: #858183'>" + res +"</i></h2>";
    document.getElementById("calculate").appendChild(divCounted);
  },
      
};

    
myCart.init()
