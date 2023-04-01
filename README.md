# shopping-list
 a shopping lsit application

// Define the ShoppingList object
function ShoppingList() {
  this.items = [];
}

// Add an item to the shopping list
ShoppingList.prototype.addItem = function(item) {
  // Check if the item is already in the list
  if (this.items.indexOf(item) === -1) {
    // Add the item to the list
    this.items.push(item);
  }
}

// Remove an item from the shopping list
ShoppingList.prototype.removeItem = function(item) {
  // Check if the item is in the list
  var index = this.items.indexOf(item);
  if (index !== -1) {
    // Remove the item from the list
    this.items.splice(index, 1);
  }
}

// Define the Item object
function Item(name, purchased) {
  this.name = name;
  this.purchased = purchased;
}

// Get the input field and button
var itemInput = document.getElementById("item-input");
var addButton = document.getElementById("add-button");

// Create the shopping list object
var shoppingList = new ShoppingList();

// Add a click listener to the "add" button
addButton.addEventListener("click", function() {
  // Get the value of the input field
  var itemName = itemInput.value;

  // Create a new Item object
  var newItem = new Item(itemName, false);

  // Add the new item to the shopping list
  shoppingList.addItem(newItem);

  // Clear the input field
  itemInput.value = "";

  // Display the updated shopping list on the page
  displayShoppingList();
});

// Display the shopping list on the page
function displayShoppingList() {
  // Get the table element
  var table = document.getElementById("shopping-list");

  // Clear the table
  table.innerHTML = "";

  // Loop through each item in the shopping list
  for (var i = 0; i < shoppingList.items.length; i++) {
    // Get the current item
    var item = shoppingList.items[i];

    // Create a new row in the table
    var row = table.insertRow();

    // Add the name column
    var nameCell = row.insertCell();
    nameCell.innerHTML = item.name;

    // Add the purchased column
    var purchasedCell = row.insertCell();
    if (item.purchased) {
      purchasedCell.innerHTML = "Purchased";
    } else {
