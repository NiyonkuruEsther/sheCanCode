const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 }
];

// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
const cheapProduct = items.reduce((prev, current) =>
  prev.price < current.price ? prev : current
);
console.log("Cheap Product:", cheapProduct);

// 2. Filter and show the product that will be expensive in the array
const expensiveProduct = items.reduce((prev, current) =>
  prev.price > current.price ? prev : current
);
console.log("Expensive Product:", expensiveProduct);

// 3. Calculate the full price of all products combined
const totalPrice = items.reduce((acc, item) => acc + item.price, 0);
console.log("Total Price of all products combined:", totalPrice);

// 4. Calculate the full price of all products combined and remove products that are under $10
const totalPriceAboveTenDollars = items
  .filter((item) => item.price >= 10)
  .reduce((acc, item) => acc + item.price, 0);
console.log(
  "Total Price of products above $10 combined:",
  totalPriceAboveTenDollars
);

// 5. Filter and show the product that will start with letter 'b' at the first position
const productStartingWithLetterB = items.find((item) =>
  item.name.toLowerCase().startsWith("b")
);
console.log("Product starting with 'B':", productStartingWithLetterB);
