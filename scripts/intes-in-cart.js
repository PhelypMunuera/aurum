var span = document.querySelector(".itemCounter");
var div = document.querySelector(".container-couter");
var itens = [];

export function intesInCart() {
  var cartButtons = document.querySelectorAll(".addToCard");
  var itemsSalvos = JSON.parse(localStorage.getItem("productsInCart") || "[]");
  nunInCart();
  cartButtons.forEach((button) => {
    button.addEventListener("click", () => {
      var product = button.closest("article");
      const id = product.id;
      const quantia = product.querySelector("input").value;

      const objeto = itens.find((obj) => obj.id === id);
      itens = itemsSalvos;

      if (!itens.some((item) => item.id === id)) {
        const item = {};
        item.id = id;
        item.qtd = product.querySelector("input").value;
        itens.push(item);

        span.textContent = itens.length;
        div.style.display = "flex";

        localStorage.setItem("productsInCart", JSON.stringify(itens));
      } else if (objeto.id === id && objeto.qtd !== quantia) {
        objeto.qtd = quantia
        console.log(objeto)
      }
    });
  });

  function nunInCart() {
    if (itemsSalvos.length > 0) {
      span.textContent = itemsSalvos.length;
      itens = itemsSalvos;
      div.style.display = "flex";
    }
    return;
  }

  function clear() {
    localStorage.clear();
  }
}

// e meu imput for igual a qtd atual
