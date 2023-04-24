const db = require("../../models");
const FactoryEngineer = db.factoryEngineer;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var factoryEngineerCode;
        await FactoryEngineer.findAll().then(data => {
            if (data.length === 0) {
                factoryEngineerCode = 'FE100500';
            } else {
                var lastFactoryEngineerCode = data[data.length - 1].factoryEngineerCode;
                var lastFactoryEngineerCodeNumber = parseInt(lastFactoryEngineerCode.substring(2));
                factoryEngineerCode = 'FE' + (lastFactoryEngineerCodeNumber + 1);
            }
        });
        await FactoryEngineer.create({
            factoryEngineerCode: factoryEngineerCode,
            factoryEngineer: req.body.factoryEngineer,
            user_id: req.user.id
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the FactoryEngineer."
            });
        }
        );
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the FactoryEngineer."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        await FactoryEngineer.findAll({ where: { user_id: req.user.id } }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving FactoryEngineer."
            });
        });
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while retrieving FactoryEngineer."
        });
    }
}

exports.deletefactoryEngineer = async (req, res) => {
    try {
        const userId = req.user.id;
        const factoryEngineerId = req.params.id;
        const factoryEngineer = await FactoryEngineer.findOne({ where: { [Op.and]: [{ id: factoryEngineerId }, { user_id: userId }] } });
        if (!factoryEngineer) {
            return res.status(400).send({ message: "Factory Engineer is not present!" });
        };
        await factoryEngineer.destroy();
        res.status(200).send({
            message: `Factory Engineer deleted successfully! Id: ${factoryEngineerId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateFactoryEngineer = async (req, res) => {
    try {
        const userId = req.user.id;
        const factoryEngineerId = req.params.id;
        const factoryEngineer = await FactoryEngineer.findOne({ where: { [Op.and]: [{ id: factoryEngineerId }, { user_id: userId }] } });
        if (!factoryEngineer) {
            return res.status(400).send({ message: "Factory Engineer is not present!" });
        };
        await factoryEngineer.update({
            ...factoryEngineer,
            factoryEngineer: req.body.factoryEngineer
        });
        res.status(200).send({ message: `Factory Engineer modified successfully! ID: ${factoryEngineerId}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}