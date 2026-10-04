const cart = [
  {
    name: "Guitar",
    price: 15000,
    quantity: 1,
  },
  {
    name: "Guitar Strings",
    price: 800,
    quantity: 3,
  },
  {
    name: "Guitar Pick",
    price: 50,
    quantity: 5,
  },
  {
    name: "Guitar Cable",
    price: 500,
    quantity: 2,
  },
  {
    name: "Guitar Amplifier",
    price: 12000,
    quantity: 1,
  },
];

function calculateTotal(cart) {
  return cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);
}

console.log("Total: ", calculateTotal(cart));
