import { amontInput } from "./operations.js";
import { intesInCart } from "./intes-in-cart.js";

export function goTocart() {
  document.querySelector(".shopping-cart").addEventListener("click", () => {
    window.location.href = "../src/pages/checkout.html";
  });
}

export function goTofiniched() {
  document.querySelector("#confirmation").addEventListener("click", () => {
    window.location.href = "../../src/pages/finished.html";
  });
}

export function route() {
  amontInput();
  intesInCart();
  goTocart();

}

route();
