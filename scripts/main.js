import { products } from "./products.js";
import { controlsAmonts } from "./operations.js";

const unorderedList = document.querySelector("ul");

products.forEach(({ tags, image, name, price, descriptions }) => {
  unorderedList.innerHTML +=
  `<li>  
    <article>
      <img
        src="./assets/image/products/${image}.png"
        alt="relogio 1"
      />

      <div class="tags">
         ${tags.map((tag) => `<span>${tag}</span>`).join("")}
      </div>

      <h3>${name}</h3>
      <p>${descriptions}</p>


      <footer>
        <span>R$<strong>${price}</strong></span>
        <div class="amount">
         <button class="btn-minus""> <i class="ph ph-minus"></i></button>
          <input  type="number" placeholder="0"/>
          <button class="btn-plus"><i class="ph ph-plus"></i></button>
        </div>
        <button id="addToCard">
          <i class="ph-fill ph-shopping-cart"></i>
        </button>
      </footer>
    </article>
  </li>`;
});

controlsAmonts("ul");

// percorrer os produtos e renderizar um elemento html para cada produto
