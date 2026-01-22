var span = document.querySelector(".itemCounter");
var div = document.querySelector(".container-couter");

export function intesInCart() {
  var amontItens = Number(span.textContent);
  var cartButtons = document.querySelectorAll(".addToCard");

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      var input = button.closest("footer").querySelector("input");
      var valueInput = Number(input.value);
      var intesInCart = (amontItens += valueInput);
      span.innerHTML = intesInCart;
      if (amontItens > 0) {
        div.style.display = "flex";
      }
    });
  });
}

