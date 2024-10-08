// Function to calculate the total price of an order
function calculateTotalOrder(items) {
    let total = 0;

    // Iterate through the array of items and sum up the prices
    items.forEach(item => {
        total += item.price;
    });

    return total;
}

// Example array of items with price property
const orderItems = [
    { name: "Laptop", price: 1200 },
    { name: "Headphones", price: 200 },
    { name: "Mouse", price: 50 },
    { name: "Keyboard", price: 100 }
];

// Calculate the total order amount
const totalPrice = calculateTotalOrder(orderItems);

// Display the total price
console.log(`Total Order Price: $${totalPrice}`);
