const products = [
  {
    name: "Gibson LP America",
    price: 1000000,
    category: "guitar",
  },
  {
    name: "Tank-G",
    price: 2999,
    category: "effects",
  },
  {
    name: "Elixir",
    price: 1200,
    category: "string",
  },
  {
    name: "Stratocaster Rj",
    price: 5000,
    category: "guitar",
  },
  {
    name: "Black Box",
    price: 3999,
    category: "effects",
  },
  {
    name: "RJ standard",
    price: 250,
    category: "string",
  },
];

const productNames = products.map((product) => product.name);

const expensiveProducts = products.filter((product) => product.price > 1000);

const foundProduct = products.find((product) => product.category === "guitar");

console.log("All Products: ", products);
console.log("Product Names: ", productNames);
console.log("Expensive Products: ", expensiveProducts);
console.log("Found Product: ", foundProduct);
