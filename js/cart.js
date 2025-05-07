let cart = [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function loadCart() {
  const saved = localStorage.getItem("cart");
  if (saved) {
    cart = JSON.parse(saved);
  }
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  const index = cart.findIndex(p => p.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
    saveCart();
    updateCartUI();
  }
}

function clearCart() {
  cart = [];
  saveCart();
  updateCartUI();
}

function updateCartUI() {
  document.getElementById("cart-count").textContent = cart.length;
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";

  const grouped = cart.reduce((acc, item) => {
    acc[item.id] = acc[item.id] || { ...item, quantity: 0 };
    acc[item.id].quantity++;
    return acc;
  }, {});

  let total = 0;
  Object.values(grouped).forEach(item => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    const li = document.createElement("li");
    li.textContent = `${item.name} — ${item.quantity} × ${item.price} грн = ${subtotal} грн`;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "–";
    removeBtn.onclick = () => removeFromCart(item.id);
    li.appendChild(removeBtn);

    cartItems.appendChild(li);
  });

  document.getElementById("total-price").textContent = total + " грн";
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
  loadCart();
  updateCartUI();
});
