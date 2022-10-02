const db = require('../../models');
const Product = db.product;

exports.create = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.findAll = async(req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
}

    