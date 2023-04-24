const db = require("../../models");
const SalesPerson = db.salesPerson;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var salesPersonCode;
        await SalesPerson.findAll().then(data => {
            if (data.length === 0) {
                salesPersonCode = 'SP100500';
            } else {
                var lastSalesPersonCode = data[data.length - 1].salesPersonCode;
                var lastSalesPersonCodeNumber = parseInt(lastSalesPersonCode.substring(2));
                salesPersonCode = 'SP' + (lastSalesPersonCodeNumber + 1);
            }
        });
        await SalesPerson.create({
            salesPersonCode: salesPersonCode,
            salesPerson: req.body.salesPerson,
            user_id: req.user.id
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Sales Person."
            });
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Sales Person."
        });
    }
}


exports.findAll = async (req, res) => {
    try {
        await SalesPerson.findAll({ where: { user_id: req.user.id } }).then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Sales Person."
        });
    }
}

exports.deleteSalesPerson = async (req, res) => {
    try {
        const userId = req.user.id;
        const salesPersonId = req.params.id;
        const salesPerson = await SalesPerson.findOne({ where: { [Op.and]: [{ id: salesPersonId }, { user_id: userId }] } });
        if (!salesPerson) {
            return res.status(400).send({ message: "Sales Person is not present!" });
        };
        await salesPerson.destroy();
        res.status(200).send({
            message: `Sales person deleted successfully! Id: ${salesPersonId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateSalesPerson = async (req, res) => {
    try {
        const userId = req.user.id;
        const salesPersonId = req.params.id;
        const salesPerson = await SalesPerson.findOne({ where: { [Op.and]: [{ id: salesPersonId }, { user_id: userId }] } });
        if (!salesPerson) {
            return res.status(400).send({ message: "Sales Person is not present!" });
        };
        await salesPerson.update({
            ...salesPerson,
            salesPerson: req.body.salesPerson
        });
        res.status(200).send({ message: `Sales Person modified successfully! ID: ${salesPersonId}}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
