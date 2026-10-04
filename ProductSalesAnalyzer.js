const sales = [
  {
    product: "Guitar",
    price: 15000,
    quantity: 2,
  },
  {
    product: "Bass",
    price: 18000,
    quantity: 1,
  },
  {
    product: "Guitar Strings",
    price: 800,
    quantity: 5,
  },
  {
    product: "Guitar Pick",
    price: 50,
    quantity: 20,
  },
  {
    product: "Amplifier",
    price: 12000,
    quantity: 3,
  },
  {
    product: "Guitar Cable",
    price: 500,
    quantity: 4,
  },
  {
    product: "Drum Set",
    price: 25000,
    quantity: 1,
  },
  {
    product: "Keyboard",
    price: 10000,
    quantity: 2,
  },
];

function calculateTotalSale(sales) {
  return sales.reduce((sum, sale) => {
    return sum + sale.price * sale.quantity;
  }, 0);
}

function calculateTotalQuantity(sales) {
  return sales.reduce((sum, sale) => {
    return sum + sale.quant;
  });
}

function findMostExpensive(sales) {
  return sales.reduce((mostExpensive, currentItem) => {
    if (currentItem.price > mostExpensive.price) {
      return currentItem;
    } else {
      return mostExpensive;
    }
  }, 0);
}
