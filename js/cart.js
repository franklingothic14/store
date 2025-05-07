let cart = [];

function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById("cart-count").textContent = cart.length;
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = "";
    let total = 0;
    cart.forEach((item, index) => {
        total += item.price;
        const li = document.createElement("li");
        li.textContent = item.name + " - " + item.price + " грн";
        const removeBtn = document.createElement("button");
        removeBtn.textContent = "✕";
        removeBtn.onclick = () => removeFromCart(index);
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });
    document.getElementById("total-price").textContent = total + " грн";
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    const cartBox = document.getElementById("cart");
    cartBox.classList.toggle("hidden");
}

function clearCart() {
    cart = [];
    updateCartUI();
}
