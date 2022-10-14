const uuid = require('uuid');

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const cars = [{
    id: '50a27028-8b04-4f37-99d4-5b842dc6e5a6',
    name: '308',
    brand: 'Peugeot',
    price: 15000,
    date: new Date("2022-01-01")
}];


// Retrieve all the cars
app.get('/cars', (req, res) => {
    res.json({});
})

// Create a new car
app.post('/cars', (req, res) => {
    console.log(req.body.name);

    const id = uuid.v4();
    /*
        Cars need to have name, brand, price and date
        The price must be above 10k€, we only sell expensive cars !
        The date must be recent enough (less than 5 years), we only sell new cars !

        Errors should be visible for the client

        The client should get back the information he entered
     */

    res.status(201).json({ id, name: req.body.name });
})

app.listen(port, () => {
    console.log(`Cars app is listening on port: ${port}`)
})