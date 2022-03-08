const myCatalog = {
  cart,
  divCatalog: null,
  products: [{
    id: '54321',
    title: "Ноутбук",
    price: 70000
  },
  {
    id: '12345',
    title: "Видеокарта",
    price: 40000
  },
  {
    id: '9876',
    title: "Процессор",
    price: 35000
  }],
      
  init() {
    this.divCatalog = document.getElementById("catalog");
    this.addProduct();
    this.addEventHandlers();
  },

  addProduct() {
    for (let i = 0; i < this.products.length; i++) {
      const productTitle = document.createElement('h2');
      const productPrice = document.createElement('h2');
      const btnAdd = document.createElement("button");

      productTitle.innerHTML = "Наименование: " + "<i style='color: #858183'>" + this.products[i].title + "</i>";
      productPrice.innerHTML = "Стоимость: " + "<i style='color: #858183'>" + this.products[i].price + "</i>";

      btnAdd.innerHTML = "<h3>Добавить в корзину</h3>";
      btnAdd.className = 'btn';
      btnAdd.setAttribute('data-id', this.products[i].id); 

      const divProduct = document.createElement("div");
      divProduct.id = i;
      divProduct.classList.add('product');
      divProduct.appendChild(productTitle);
      divProduct.appendChild(productPrice);
      divProduct.appendChild(btnAdd);

      this.divCatalog.appendChild(divProduct);
    }
  },

  addEventHandlers() {
    this.divCatalog.addEventListener('click', event => this.addToBusket(event));
  },

  addToBusket(event) {
    if (!event.target.classList.contains('btn')) return;
    const productId = event.target.dataset.id;
    const product = this.products.find(product => product.id == productId);
    myCart.addToCart(product);
  }
};

const myCart = {
  divCart: null,
  cart: [],

  init() {
    addToCart(product);
  },

  addToCart(product) {
    const productChecked = this.cart.find(productCheck => productCheck.id == product.id);
    if (productChecked == undefined) {
      product.count = 1;
      this.cart.push(product);
    } else {
      product.count += 1;
    }
    this.countMe();
    this.showCart();
  },

  showCart() {
    this.divCart = document.getElementById("list");
    this.divCart.innerText = "";
    for (let i = 0; i < this.cart.length; i++) {
      const divCartProduct = document.createElement("div");
      divCartProduct.classList.add("product" + i, 'product')
      const productTitle = document.createElement('h2');
      const productPrice = document.createElement('h2');
      const productCount = document.createElement('h2');

      productTitle.innerHTML = "Наименование: " + "<i style='color: #858183'>" + this.cart[i].title + "</i>";
      productPrice.innerHTML = "Стоимость: " + "<i style='color: #858183'>" + this.cart[i].price + "</i>";
      productCount.innerHTML = "Количество: " + "<i style='color: #858183'>" + this.cart[i].count + "</i>";

      divCartProduct.appendChild(productTitle);
      divCartProduct.appendChild(productPrice);
      divCartProduct.appendChild(productCount);

      this.divCart.appendChild(divCartProduct);
    }
  },

  countMe() {
    let res = 0;
    let len = 0;
    for (let i = 0; i < this.cart.length; i++) {
      res += this.cart[i].price * this.cart[i].count;
      len += this.cart[i].count
    }
    const divCounted = document.createElement('div');
    if (res > 0) {
      divCounted.innerHTML = "<h2>Выбрано " + "<i style='color: #858183'>" + len + "</i> товара(ов) на сумму: " + "<i style='color: #858183'>" + res +"</i></h2>";
    } else {
      divCounted.innerHTML = "<h2>Корзина пуста!</h2>";
    }
    divCalculate = document.getElementById("calculate");
    divCalculate.innerHTML = '';
    divCalculate.appendChild(divCounted);
  }
}
    
myCatalog.init()
