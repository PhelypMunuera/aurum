import { products } from "./products.js";

export function printItens() {
  const itensSave = JSON.parse(localStorage.getItem("productsInCart")) || [];
  const unorderedList = document.querySelector("ul");
  var item = {};
  function renderItens() {
    for (let i = 0; i < itensSave.length; i++) {
      const backitem = products.find((p) => p.id === item.id);
      item = itensSave[i];

      
      console.log(backitem);

      //       unorderedList.innerHTML += `<li>
      // <img src="../../assets/image/products/${products}" alt="" />
      // </li>`;
    }
  }

  renderItens();
}

printItens();

//       unorderedList.innerHTML += `<li>
// <img src="../../assets/image/products/relogio-1.png" alt="" />

//       <img
//         src="./assets/image/products/${image}.png"
//         alt="relogio 1"
//       />

//       <div class="tags">
//          ${tags.map((tag) => `<span>${tag}</span>`).join("")}
//       </div>

//       <h3>${name}</h3>
//       <p>${descriptions}</p>

//       <footer>
//         <span>R$<strong>${price}</strong></span>
//         <div class="amount">
//          <button class="btn-minus""> <i class="ph ph-minus"></i></button>
//           <input disabled type="number" value="1"/>
//           <button class="btn-plus"><i class="ph ph-plus"></i></button>
//         </div>
//         <button class="addToCard">
//           <i class="ph-fill ph-shopping-cart"></i>
//         </button>
//       </footer>
//     </article>

//   <div class="iten-select">
//     <h1>Expresso Tradicional</h1>
//     <div class="action-iten">
//       <div class="amount">
//         <button class="">
//           <i class="ph ph-minus"></i>
//         </button>
//         <input disabled type="number" value="1" />
//         <button class="">
//           <i class="ph ph-plus"></i>
//         </button>
//       </div>
//       <button class="remove">
//         <i class="ph ph-trash"></i>
//         Remover
//       </button>
//     </div>
//   </div>
//   <span>
//     <strong>R$</strong> 897,90
//   </span>

// </li>`;
