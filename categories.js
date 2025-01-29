document.addEventListener("DOMContentLoaded", () => {
    // Event-Listener für "Back to Categories"-Button
    const backButton = document.getElementById("back-to-categories");
    if (backButton) {
        backButton.addEventListener("click", () => {
            window.location.href = "categories.html";
        });
    }


// Datenstruktur für Kategorien und Produkte
const data = {
    categories: {
        fruits: {
            name: "Fruits",
            products: ["apple", "banana", "watermelon", "cherry", "litchi", "grapes", "coconut", "dates", "lemon", "green_apple", "hazelnut", "raisins", "kiwi", "orange", "strawberry", "kaki"]
        },
        vegetables: {
            name: "Vegetables",
            products: ["carrot", "tomato", "broccoli", "garlic", "onion", "cucumber", "spinach", "lettuce", "pumpkin", "potato", "tofu"]
        },
        meat: {
            name: "Meat",
            products: ["chicken", "beef", "sausage"]
        }
    },
    products: {
        "apple": { "name": "Apple", "price": "2.99€/kg", "image": "apple.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "banana": { "name": "Banana", "price": "1.50€/kg", "image": "banana.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "carrot": { "name": "Carrot", "price": "1.99€/kg", "image": "carrot.jpg", "attributes": ["vegetable", "fresh"], "categories": ["vegetables"] },
        "tomato": { "name": "Tomato", "price": "2.50€/kg", "image": "tomato.jpg", "attributes": ["vegetable", "fresh"], "categories": ["vegetables"] },
        "broccoli": { "name": "Broccoli", "price": "3.20€/kg", "image": "broccoli.jpg", "attributes": ["vegetable", "fresh"], "categories": ["vegetables"] },
        "chicken": { "name": "Chicken", "price": "9.00€/kg", "image": "chicken.jpg", "attributes": ["meat", "cooked"], "categories": ["meat"] },
        "beef": { "name": "Beef", "price": "15.00€/kg", "image": "beef.jpg", "attributes": ["meat", "cooked"], "categories": ["meat"] },
        "watermelon": { "name": "Watermelon", "price": "1.80€/kg", "image": "watermelon.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "cherry": { "name": "Cherry", "price": "6.50€/kg", "image": "cherry.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "litchi": { "name": "Litchi", "price": "4.00€/kg", "image": "litchi.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "sausage": { "name": "Sausage", "price": "10.00€/kg", "image": "sausage.jpg", "attributes": ["meat", "cooked"], "categories": ["meat"] },
        "grapes": { "name": "Grapes", "price": "3.00€/kg", "image": "grapes.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "coconut": { "name": "Coconut", "price": "3.50€/kg", "image": "coconut.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "dates": { "name": "Dates", "price": "10.00€/kg", "image": "dates.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "garlic": { "name": "Garlic", "price": "3.00€/kg", "image": "garlic.jpg", "attributes": ["vegetable", "fresh"], "categories": ["vegetables"] },
        "onion": { "name": "Onion", "price": "1.50€/kg", "image": "onion.jpg", "attributes": ["vegetable", "fresh"], "categories": ["vegetables"] },
        "lemon": { "name": "Lemon", "price": "2.00€/kg", "image": "lemon.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "cucumber": { "name": "Cucumber", "price": "1.80€/kg", "image": "cucumber.jpg", "attributes": ["vegetable", "fresh"], "categories": ["vegetables"] },
        "green_apple": { "name": "Green Apple", "price": "3.00€/kg", "image": "green_apple.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "hazelnut": { "name": "Hazelnut", "price": "12.00€/kg", "image": "hazelnut.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "raisins": { "name": "Raisins", "price": "6.00€/kg", "image": "raisins.jpg", "attributes": ["fruit", "cooked"], "categories": ["fruits"] },
        "kiwi": { "name": "Kiwi", "price": "4.00€/kg", "image": "kiwi.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "tofu": { "name": "Tofu", "price": "4.50€/kg", "image": "tofu.jpg", "attributes": ["vegetable", "cooked"], "categories": ["vegetables"] },
        "strawberry": { "name": "Strawberry", "price": "6.00€/kg", "image": "strawberry.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "spinach": { "name": "Spinach", "price": "4.00€/kg", "image": "spinach.jpg", "attributes": ["vegetable", "fresh"], "categories": ["vegetables"] },
        "lettuce": { "name": "Lettuce", "price": "2.20€/kg", "image": "lettuce.jpg", "attributes": ["vegetable", "fresh"], "categories": ["vegetables"] },
        "pumpkin": { "name": "Pumpkin", "price": "5.00€/kg", "image": "pumpkin.jpg", "attributes": ["vegetable", "fresh"], "categories": ["vegetables"] },
        "kaki": { "name": "Kaki", "price": "3.50€/kg", "image": "kaki.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] },
        "potato": { "name": "Potato", "price": "1.00€/kg", "image": "potato.jpg", "attributes": ["vegetable", "fresh"], "categories": ["vegetables"] },
        "orange": { "name": "Orange", "price": "2.50€/kg", "image": "orange.jpg", "attributes": ["fruit", "fresh"], "categories": ["fruits"] }
    }
}

/ DOM-Elemente
const categoriesTable = document.querySelector(".categories-table tbody");
const addCategoryButton = document.querySelector(".add-category-button");

// Funktion: Kategorien laden
function loadCategories() {
    categoriesTable.innerHTML = "";
    Object.entries(data.categories).forEach(([id, category], index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${index + 1}</td>
            <td><a href="#" style="font-weight: bold;">${category.name}</a></td>
            <td>${category.products.length}</td>
            <td><button class="btn-action edit" data-id="${id}"><i class="fas fa-edit"></i> Edit</button></td>
            <td><button class="btn-action delete" data-id="${id}"><i class="fas fa-trash"></i> Delete</button></td>
        `;
        categoriesTable.appendChild(row);
    });

    addEventListeners();
}

// Funktion: Kategorie hinzufügen
function addCategory(name) {
    const newId = name.toLowerCase().replace(/\s+/g, "_");
    if (!data.categories[newId]) {
        data.categories[newId] = { name, products: [] };
        loadCategories();
    } else {
        alert("Category already exists!");
    }
}

// Funktion: Kategorie löschen
function deleteCategory(id) {
    if (confirm(`Are you sure you want to delete the category "${data.categories[id].name}"?`)) {
        delete data.categories[id];
        Object.entries(data.products).forEach(([productId, product]) => {
            product.categories = product.categories.filter((cat) => cat !== id);
            if (product.categories.length === 0) delete data.products[productId];
        });
        loadCategories();
    }
}

// Funktion: Suchfunktion
function searchProducts(query) {
    const results = Object.entries(data.products).filter(([id, product]) =>
        Object.values(product).some(value =>
            value.toString().toLowerCase().includes(query.toLowerCase())
        )
    );
    displaySearchResults(results);
}

// Ergebnisse anzeigen
function displaySearchResults(results) {
    const resultsContainer = document.querySelector(".content-wrapper");
    if (!resultsContainer) return;

    resultsContainer.innerHTML = ""; // Alte Ergebnisse löschen

    if (results.length === 0) {
        resultsContainer.innerHTML = "<p>No results found</p>";
        return;
    }

    results.forEach(([id, product]) => {
        const resultItem = document.createElement("div");
        resultItem.classList.add("food-item");
        resultItem.innerHTML = `
            <img src="images/${product.image}" alt="${product.name}" class="food-image">
            <div class="info">
                <h3>${product.name}</h3>
                <p>Price: ${product.price}</p>
                <p>Categories: ${product.categories.join(", ")}</p>
            </div>
        `;
        resultsContainer.appendChild(resultItem);
    });
}

// Funktion: Filter nach Preisbereich
function filterByPrice(minPrice, maxPrice) {
    const results = Object.entries(data.products).filter(([id, product]) => {
        const price = parseFloat(product.price.replace("€/kg", ""));
        return price >= minPrice && price <= maxPrice;
    });
    displaySearchResults(results);
}

// Funktion: Kategorie bearbeiten
function editCategory(id) {
    const newName = prompt("Enter the new name for the category:", data.categories[id].name);
    if (newName) {
        data.categories[id].name = newName;
        loadCategories();
    }
}



// Event-Handler hinzufügen
function addEventListeners() {
    document.querySelectorAll(".btn-action.edit").forEach((button) => {
        button.addEventListener("click", () => {
            const id = button.dataset.id;
            editCategory(id);
        });
    });

    document.querySelectorAll(".btn-action.delete").forEach((button) => {
        button.addEventListener("click", () => {
            const id = button.dataset.id;
            deleteCategory(id);
        });
    });

    addCategoryButton.addEventListener("click", () => {
        const categoryName = prompt("Enter the name of the new category:");
        if (categoryName) addCategory(categoryName.trim());
    });
}

// Kategorien initial laden
loadCategories();


// Event-Listener für Logout-Button
const logoutButton = document.querySelector(".buttons button:nth-child(2)"); // Zweiter Button in der Buttons-Gruppe
if (logoutButton) {
    logoutButton.addEventListener("click", () => {
        alert("Logging out...");
        window.location.href = "login.html";
    });
}

// Event-Listener für Add Food-Button
const addFoodButton = document.querySelector(".buttons button:nth-child(1)"); // Erster Button in der Buttons-Gruppe
if (addFoodButton) {
    addFoodButton.addEventListener("click", () => {
        window.location.href = "add-food.html";
    });
}

// Event-Listener für den Warenkorb (Cart)-Button
const cartButton = document.querySelector(".buttons button:nth-child(3)"); // Dritter Button in der Buttons-Gruppe
if (cartButton) {
    cartButton.addEventListener("click", () => {
        alert("Opening cart...");
        window.location.href = "cart.html";
    });
}

});