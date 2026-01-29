var itemsValue = 0;
var deliveryValue = 0;
var some = 0;

var ul = document.querySelector("ul");
var sum = document.querySelector(".sum");
var delivery = document.querySelector(".delivery");
var total = document.querySelector(".total");
const result = 0;

export function calculator() {
  const spans = ul.querySelectorAll("li span strong");
  spans.forEach((s) => (some += Number(s.textContent)));
  
  sum.innerHTML = some;
  total.innerHTML = Number(delivery.textContent) + Number(sum.textContent);

  
}
