const db = require("../../models");
const Shutter = db.shutter;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var shutterCode;
        await Shutter.findAll().then(data => {
            if (data.length === 0) {
                shutterCode = 'S100500';
            } else {
                var lastShutterCode = data[data.length - 1].shutterCode;
                var lastShutterCodeNumber = parseInt(lastShutterCode.substring(1));
                shutterCode = 'S' + (lastShutterCodeNumber + 1);
            }
        });
        await Shutter.create({
            shutterCode: shutterCode,
            shutter: req.body.shutter,
            user_id: req.user.id
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Shutter."
            });
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Shutter."
        });
    }
}


exports.findAll = async (req, res) => {
    try {
        await Shutter.findAll({ where: { user_id: req.user.id } }).then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Shutter."
        });
    }
}

exports.deleteShutter = async (req, res) => {
    try {
        const userId = req.user.id;
        const shutterId = req.params.id;
        const shutter = await Shutter.findOne({ where: { [Op.and]: [{ id: shutterId }, { user_id: userId }] } });
        if (!shutter) {
            return res.status(400).send({ message: "Shutter is not present!" });
        };
        await shutter.destroy();
        res.status(200).send({
            message: `Shutter deleted successfully! Id: ${shutterId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateShutter = async (req, res) => {
    try {
        const userId = req.user.id;
        const shutterId = req.params.id;
        const shutter = await Shutter.findOne({ where: { [Op.and]: [{ id: shutterId }, { user_id: userId }] } });
        if (!shutter) {
            return res.status(400).send({ message: "Shutter is not present!" });
        };
        await shutter.update({
            ...shutter,
            shutter: req.body.shutter
        });
        res.status(200).send({ message: `Shutter modified successfully! ID: ${shutterId}}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
