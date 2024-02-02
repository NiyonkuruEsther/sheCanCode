// const inputs = document.querySelectorAll("input");

// inputs.forEach((input) => {
//   input.addEventListener("input", () => {
//     console.log(input.value);
//   });
// });

// QN3
const today = new Date();
const day = today.toLocaleDateString("en-US", { weekday: "long" });
console.log(`Today is: ${day}`);

// QN2
const largest = (num1, num2, num3) => {
  return Math.max(num1, num2, num3);
};
console.log(`The largest number is: ${largest(12,7,56)}`);

// QN3
const inRange = (num1, num2, num3) => {
  return (
    (num1 >= 50 && num1 <= 99) ||
    (num2 >= 50 && num2 <= 99) ||
    (num3 >= 50 && num3 <= 99)
  );
};
console.log(
  `Are any of the numbers in the range 50..99? ${inRange(4, 67, 120)}`
);
