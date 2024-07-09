const express = require('express');
const bountyRouter = express.Router();
const { v4: uuidv4 } = require('uuid'); // Correct way to import uuid

const bounties = [
    {
        firstname: "Jack",
        lastname: "Sparrow",
        living: true,
        bountyamount: "$500",
        Type: "Jedi",
        _id: uuidv4()
    }
];

// Middleware to parse JSON bodies
bountyRouter.use(express.json());

// GET route to fetch all bounties
bountyRouter.get('/', (req, res) => {
    res.send(bounties);
});

// POST route to add a new bounty
bountyRouter.post('/', (req, res) => {
    const newBounty = req.body;
    newBounty._id = uuidv4();
    bounties.push(newBounty);
    res.send(`Successfully added ${newBounty.firstname} to the database!`);
});

// DELETE route to delete a bounty
bountyRouter.delete('/:id', (req, res) => {
    const { id } = req.params;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === id);
    if (bountyIndex !== -1) {
        bounties.splice(bountyIndex, 1);
        res.send(`Successfully deleted bounty with ID ${id}`);
    } else {
        res.status(404).send('Bounty not found');
    }
});

// PUT route to update a bounty
bountyRouter.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedBounty = req.body;
    const bountyIndex = bounties.findIndex(bounty => bounty._id === id);
    if (bountyIndex !== -1) {
        bounties[bountyIndex] = { ...bounties[bountyIndex], ...updatedBounty, _id: id };
        res.send(`Successfully updated bounty with ID ${id}`);
    } else {
        res.status(404).send('Bounty not found');
    }
});

module.exports = bountyRouter;
