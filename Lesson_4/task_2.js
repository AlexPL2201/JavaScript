const myCart = {
  products: [{
    id: 54321,
    title: "qwerty",
    price: 10000,
    count: 2
  },
  {
    id: 12345,
    title: "asdfgh",
    price: 5000,
    count: 3
  }],
  result() {
    let res = 0;
    for (i = 0; i < this.products.length; i++) {
      res += this.products[i].price * this.products[i].count;
    }
    return res;
  }
};

console.log(myCart.result())
