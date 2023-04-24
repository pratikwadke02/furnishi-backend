const db = require("../../models");
const Carcass = db.carcass;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var carcassCode;
        await Carcass.findAll().then(data => {
            if (data.length === 0) {
                carcassCode = 'CR100500';
            } else {
                var lastCarcassCode = data[data.length - 1].carcassCode;
                var lastCarcassCodeNumber = parseInt(lastCarcassCode.substring(2));
                carcassCode = 'CR' + (lastCarcassCodeNumber + 1);
            }
        });
        await Carcass.create({
            carcassCode: carcassCode,
            carcass: req.body.carcass,
            user_id: req.user.id
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Carcass."
            });
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Carcass."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        await Carcass.findAll({ where: { user_id: req.user.id } }).then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Carcass."
        });
    }
}

exports.deleteCarcass = async (req, res) => {
    try {
        const userId = req.user.id;
        const carcassId = req.params.id;
        const carcass = await Carcass.findOne({ where: { [Op.and]: [{ id: carcassId }, { user_id: userId }] } });
        if (!carcass) {
            return res.status(400).send({ message: "Carcass is not present!" });
        };
        await carcass.destroy();
        res.status(200).send({
            message: `Carcass deleted successfully! Id: ${carcassId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateCarcass = async (req, res) => {
    try {
        const userId = req.user.id;
        const carcassId = req.params.id;
        const carcass = await Carcass.findOne({ where: { [Op.and]: [{ id: carcassId }, { user_id: userId }] } });
        if (!carcass) {
            return res.status(400).send({ message: "Carcass is not present!" });
        };
        await carcass.update({
            ...carcass,
            carcass: req.body.carcass
        });
        res.status(200).send({ message: `Carcass modified successfully! ID: ${carcassId}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
