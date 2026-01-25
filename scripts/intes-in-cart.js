var span = document.querySelector(".itemCounter");
var div = document.querySelector(".container-couter");
export const itens = [];

export function intesInCart() {
  var cartButtons = document.querySelectorAll(".addToCard");

  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      var product = button.closest("article");
      if (!itens.includes(product.id)) {
        itens.push(product.id);
        span.textContent = itens.length;
        div.style.display = "flex";
      }

      /*
 var amontItens = Number(span.textContent);
 var valueInput = Number(input.value);
 span.innerHTML = intesInCart;
*/
    });
  });
}
