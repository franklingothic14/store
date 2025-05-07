const products = [
  {
    id: 1,
    name: "Паркетна дошка Дуб",
    price: 1200,
    category: "parket",
    image: "https://via.placeholder.com/300x200?text=Дуб"
  },
  {
    id: 2,
    name: "Паркетна дошка Ясен",
    price: 1100,
    category: "parket",
    image: "https://via.placeholder.com/300x200?text=Ясен"
  },
  {
    id: 3,
    name: "Лак для підлоги",
    price: 450,
    category: "chemistry",
    image: "https://via.placeholder.com/300x200?text=Лак"
  },
  {
    id: 4,
    name: "Клей для паркету",
    price: 600,
    category: "chemistry",
    image: "https://via.placeholder.com/300x200?text=Клей"
  }
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
        <img src="${p.image}" alt="${p.name}">
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
