const db = require('../../models');
const Product = db.product;

exports.create = async (req, res) => {
    try {
        var productCode;
        const products = await Product.findAll();
        if (products.length == 0) {
            productCode = "P100500";
        }
        else {
            var lastProduct = products[products.length - 1];
            var lastDigits = lastProduct.productCode.substring(1, 7);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            productCode = "P" + incrementedDigits;
        }
        await Product.create({
            productCode: productCode,
            factoryProductCode: req.body.factoryProductCode,
            name: req.body.name,
            user_id: req.user.id
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Product."
            });
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

exports.findAll = async (req, res) => {
    try {
        const products = await Product.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error);
    }
}

