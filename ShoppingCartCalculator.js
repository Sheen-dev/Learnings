let productName = "Gibson";
let price = 2999;
let quantity = 3;

function calculateSubtotal(price, quantity) {
  return price * quantity;
}

function calculateDiscount(subtotal) {
  if (subtotal >= 2500) {
    return subtotal * 0.2;
  } else if (subtotal >= 1500) {
    return subtotal * 0.1;
  } else {
    return 0;
  }
}

function calculateFinalTotal(subtotal, discount) {
  return subtotal - discount;
}

const subtotal = calculateSubtotal(price, quantity);
const discount = calculateDiscount(subtotal);
const finalTotal = calculateFinalTotal(subtotal, discount);

console.log("Product: ", productName);
console.log("Price: ", price);
console.log("Quantity: ", quantity);
console.log("Subtotal: ", subtotal);
console.log("Discount: ", discount);
console.log("Final Total: ", finalTotal);
