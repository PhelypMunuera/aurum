export function goTocart() {
  document.querySelector(".shopping-cart").addEventListener("click", () => {
    window.location.href = "../src/pages/checkout.html";
  });
}


