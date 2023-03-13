const db = require("../../models");
const Carcass = db.carcass;

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
