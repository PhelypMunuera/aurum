import { products } from "./products.js";
import { goTofiniched } from "./route.js";
import { calculator } from "./calculator.js";

export function printItens() {
  const itensSave = JSON.parse(localStorage.getItem("productsInCart")) || [];
  const unorderedList = document.querySelector("ul");
  var item = {};
  function renderItens() {
    for (let i = 0; i < itensSave.length; i++) {
      item = itensSave[i];

      const backitem = products.find((p) => p.id === item.id);

      console.log(backitem.image);

      unorderedList.innerHTML += `<li>
              <img src="../../assets/image/products/${backitem.image}.png" alt="" />
              <div class="iten-select">
                <h1>${backitem.name}</h1>
                <div class="action-iten">
                  <div class="amount">
                    <button class=""><i class="ph ph-minus"></i></button>
                    <input disabled type="number" value="${item.qtd}" />
                    <button class=""><i class="ph ph-plus"></i></button>
                  </div>
                  <button class="remove">
                    <i class="ph ph-trash"></i>
                    Remover
                  </button>
                </div>
              </div>
              <span class="price">R$<strong>${backitem.price * item.qtd}</strong></span>


      </li>`;
    }
  }

  renderItens();
}

printItens();
goTofiniched()
calculator()
