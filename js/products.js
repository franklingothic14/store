const products = [
    { id: 1, name: "Паркетна дошка Дуб", price: 1200, category: "parket" },
    { id: 2, name: "Паркетна дошка Ясен", price: 1100, category: "parket" },
    { id: 3, name: "Лак для підлоги", price: 450, category: "chemistry" },
    { id: 4, name: "Клей для паркету", price: 600, category: "chemistry" }
];

function renderProducts(category = "all") {
    const list = document.getElementById("product-list");
    list.innerHTML = "";
    products
        .filter(p => category === "all" || p.category === category)
        .forEach(p => {
            const div = document.createElement("div");
            div.className = "product";
            div.innerHTML = `
                <h3>${p.name}</h3>
                <p>${p.price} грн</p>
                <button onclick="addToCart(${p.id})">Додати</button>
            `;
            list.appendChild(div);
        });
}

function filterCategory(cat) {
    renderProducts(cat);
}

window.onload = () => renderProducts();
