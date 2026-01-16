export function amontInput() {
  const amountButtons = document.querySelectorAll(".amount button");

  amountButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const input = button.closest(".amount").querySelector("input");
      var valueInput = Number(input.value);

      if (button.className === "btn-plus") {
        if (valueInput <= 8) {
          valueInput++;
        }
      } else {
        if (valueInput > 1) {
          valueInput--;
        }
      }

      input.value = valueInput;
    });
  });
}
