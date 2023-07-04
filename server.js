const express = require('express');
const app = express();

// Define the Fruit class
class Fruit {
  constructor(id, name, color) {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

// Mock data - an array of Fruit objects
const fruits = [
  new Fruit(1, 'Apple', 'Red'),
  new Fruit(2, 'Banana', 'Yellow'),
  new Fruit(3, 'Orange', 'Orange'),
  new Fruit(4, 'Grapes', 'Green')
];

// API endpoint to get sorted fruits by color
app.get('/fruits', (req, res) => {
  const sortedFruits = fruits.sort((a, b) => a.color.localeCompare(b.color));
  res.json(sortedFruits);
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
