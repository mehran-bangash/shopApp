const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

mongoose.connect('mongodb://mongo:27017/productdb', { useNewUrlParser: true, useUnifiedTopology: true });

const productSchema = new mongoose.Schema({
    name: String,
    price: Number
});

const Product = mongoose.model('Product', productSchema);

app.post('/products', async (req, res) => {
    const product = new Product(req.body);
    await product.save();
    res.status(201).send(product);
});

app.get('/products', async (req, res) => {
    const products = await Product.find();
    res.status(200).send(products);
});

app.listen(3000, () => {
    console.log('Product service listening on port 3000');
});

