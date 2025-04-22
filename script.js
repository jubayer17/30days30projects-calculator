const buttons = document.querySelectorAll(".calc-btn");
const display = document.getElementById("display");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    display.value += button.value;
  });
});
