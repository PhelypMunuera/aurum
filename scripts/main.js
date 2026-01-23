import { products } from "./products.js";
import { amontInput } from "./operations.js";
import { intesInCart } from "./intes-in-cart.js";

const unorderedList = document.querySelector("ul");

products.forEach(({  id, tags, image, name, price, descriptions }) => {
  unorderedList.innerHTML +=
  `<li>  
    <article id='${id}'>
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
          <input disabled type="number" value="1"/>
          <button class="btn-plus"><i class="ph ph-plus"></i></button>
        </div>
        <button class="addToCard">
          <i class="ph-fill ph-shopping-cart"></i>
        </button>
      </footer>
    </article>
  </li>`;
});

amontInput();
intesInCart()

