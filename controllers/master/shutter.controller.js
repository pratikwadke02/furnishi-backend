const db = require("../../models");
const Shutter = db.shutter;

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