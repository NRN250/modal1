const modal = document.getElementById("modal");
const btn = document.getElementById("see-detail-btn");
const span = document.getElementsByClassName("close")[0];
const product = document.getElementById("product");
const price = document.getElementById("price");
const quantitySelect = document.getElementById("quantity-select");

btn.onclick = function() {
  modal.style.display = "block";
  sweater.textContent = "product";
  price.textContent = "price";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
