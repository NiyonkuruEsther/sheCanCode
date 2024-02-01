const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    console.log(input.value);
  });
});
