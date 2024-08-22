// Declaring variables and their data types

// String: Represents text data
let groceryItem = "Apple";

// Number: Represents numerical data
let quantity = 5;

// Boolean: Represents true or false
let isAvailable = true;

// Array: Represents a collection of items
let shoppingList = ["Apple", "Banana", "Orange"];

// Object: Represents an entity with properties
let groceryDetails = {
    name: "Apple",
    pricePerUnit: 0.5, // Number
    inStock: true // Boolean
};

// Undefined: A variable declared but not assigned a value yet
let discount;

// Null: A variable explicitly set to "no value"
let specialOffer = null;

// Real-time example: Grocery shopping calculation

// Calculating the total cost of the grocery item
let totalCost = quantity * groceryDetails.pricePerUnit;

// Displaying the results
console.log("Grocery Item: " + groceryItem); // Output: Apple
console.log("Quantity: " + quantity); // Output: 5
console.log("Is Available: " + isAvailable); // Output: true
console.log("Shopping List: " + shoppingList); // Output: ["Apple", "Banana", "Orange"]
console.log("Grocery Details: ", groceryDetails);
