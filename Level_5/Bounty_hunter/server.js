const express = require('express');
const app = express();
const bountyRouter = require('./routes/bountyrouter');
const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json());

// Routes
app.use('/bounty', bountyRouter);

// Server listen
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});
