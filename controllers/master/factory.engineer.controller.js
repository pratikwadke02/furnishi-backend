const db = require("../../models");
const FactoryEngineer = db.factoryEngineer;

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