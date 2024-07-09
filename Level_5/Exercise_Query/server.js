const express = require('express');
const app = express();
const fruitRouter = require('./routes/fruitrouter');
const PORT = process.env.PORT || 9000;

// Middleware
app.use(express.json());

app.use ("/item", (req, res, next) =>{
    console.log("I'm testing the NEXT function")
    next()
})

app.get("/item", (req, res, next)=>{
    console.log("Get request was executed")
    res.send(req.body)
})

// Routes
app.use('/fruit', fruitRouter);

// Server listen
app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`);
});
