const express = require('express');
const app = express();
const products = require('./data/products');

app.get('/', (req, res) => {
    res.send('Api is running');
});

app.get('/api/products', (req, res) => {
    res.json(products);
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find(p => p._id === req.params.id);

    res.json(product);
})

app.listen(5000, console.log('Server Running on PORT 5000'));