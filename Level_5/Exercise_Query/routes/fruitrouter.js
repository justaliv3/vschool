const express = require('express');
const fruitRouter = express.Router();
const { v4: uuidv4 } = require('uuid');  // Correct way to import uuid

const fruit = [
    {
        name: "Pear", 
        color: "Green",
        _id: uuidv4()
    },
    {
        name: "Apple",
        color: "Red",
        _id: uuidv4()
    }
];

// Middleware to parse JSON bodies
fruitRouter.use(express.json());

// GET route to fetch all fruits
fruitRouter.get('/', (req, res) => {
    res.send(fruit);
});

// GET route to fetch fruits by color using query parameters
fruitRouter.get('/color', (req, res) => {
    const color = req.query.color;
    if (color) {
        const fruitsByColor = fruit.filter(f => f.color.toLowerCase() === color.toLowerCase());
        res.send(fruitsByColor);
    } else {
        res.send(fruit);
    }
});

// POST route to add a new fruit
fruitRouter.post('/', (req, res) => {
    const newFruit = req.body;
    newFruit._id = uuidv4();
    fruit.push(newFruit);
    res.send(`Successfully added ${newFruit.name} to the database!`);
});

module.exports = fruitRouter;
