// Javascript für das Hinzufügen eines  neuen Lebensmittels
document.getElementById('add-food').addEventListener('click', function () {
    // Get input values
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const calories = document.getElementById('calories').value;
    const imageUrl = document.getElementById('image').value;

    // Check if all inputs are filled
    if (name && price && calories && imageUrl) {
        // Create a new food item
        const foodItem = {
            name: name,
            price: price,
            calories: calories,
            imageUrl: imageUrl
        };

        // Save to localStorage
        let foodList = JSON.parse(localStorage.getItem('foodList')) || [];
        foodList.push(foodItem);
        localStorage.setItem('foodList', JSON.stringify(foodList));

        // Redirect to the main page
        window.location.href = 'index.html';
    } else {
        alert('Please fill in all fields.');
    }
});

// JavaScript für die Weiterleitung zur Seite create-food.html
document.addEventListener('DOMContentLoaded', function() {
    const createFoodButton = document.getElementById('create-food-button');
    if (createFoodButton) {
        createFoodButton.addEventListener('click', function() {
            window.location.href = 'create-food.html';
        });
    }
});