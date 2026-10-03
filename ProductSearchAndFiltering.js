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

function searchProducts(products, searchTerm) {
  return products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
}

function filterByCategory(products, category) {
  return products.filter((product) => product.category === category);
}

function getProductNames(products) {
  return products.map((product) => product.name);
}

function getExpensiveProducts(products) {
  return products.filter((product) => product.price > 5000);
}

console.log("Search for a product name: ", searchProducts(products, "Gibson"));
console.log(
  "Filter Products  by category: ",
  filterByCategory(products, "guitar"),
);
console.log("Get all product names: ", getProductNames(products));
console.log("Get products above 5,000: ", getExpensiveProducts(products));
