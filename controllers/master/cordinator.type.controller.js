const db = require('../../models');
const CordinatorType = db.cordinatorType;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var cordinatorTypeCode;
        const cordinatorTypes = await CordinatorType.findAll();
        if (cordinatorTypes.length == 0) {
            cordinatorTypeCode = "CT100500";
        } else {
            var lastCordinatorType = cordinatorTypes[cordinatorTypes.length - 1];
            var lastDigits = lastCordinatorType.cordinatorTypeCode.substring(2, 8);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            cordinatorTypeCode = "CT" + incrementedDigits;
        }
        await CordinatorType.create({
            cordinatorTypeCode: cordinatorTypeCode,
            cordinatorType: req.body.cordinatorType,
            user_id: req.user.id
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Cordinator Type."
            });
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const cordinatorTypes = await CordinatorType.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(cordinatorTypes);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.deleteCordinatorType = async (req, res) => {
    try {
        const userId = req.user.id;
        const cordinatorTypeId = req.params.id;
        const cordinatorType = await CordinatorType.findOne({ where: { [Op.and]: [{ id: cordinatorTypeId }, { user_id: userId }] } });
        if (!cordinatorType) {
            return res.status(400).send({ message: "Cordinator Type is not present!" });
        };
        await cordinatorType.destroy();
        res.status(200).send({
            message: `Cordinator Type deleted successfully! Id: ${cordinatorTypeId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateCordinatorType = async (req, res) => {
    try {
        const userId = req.user.id;
        const cordinatorTypeId = req.params.id;
        const cordinatorType = await CordinatorType.findOne({ where: { [Op.and]: [{ id: cordinatorTypeId }, { user_id: userId }] } });
        if (!cordinatorType) {
            return res.status(400).send({ message: "Cordinator Type is not present!" });
        };
        await cordinatorType.update({
            ...cordinatorType,
            cordinatorType: req.body.cordinatorType
        });
        res.status(200).send({ message: `Cordinator Type modified successfully! ID: ${cordinatorTypeId}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}