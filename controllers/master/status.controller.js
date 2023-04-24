const db = require('../../models');
const Status = db.status;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var statusCode;
        const statuses = await Status.findAll();
        if (statuses.length == 0) {
            statusCode = "S100500";
        } else {
            var lastStatus = statuses[statuses.length - 1];
            var lastDigits = lastStatus.statusCode.substring(1, 7);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            statusCode = "S" + incrementedDigits;
        }
        await Status.create({
            statusCode: statusCode,
            status: req.body.status,
            user_id: req.user.id
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Status."
            });
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const statuses = await Status.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(statuses);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.deleteStatus = async (req, res) => {
    try {
        const userId = req.user.id;
        const statusId = req.params.id;
        const status = await Status.findOne({ where: { [Op.and]: [{ id: statusId }, { user_id: userId }] } });
        if (!status) {
            return res.status(400).send({ message: "Status is not present!" });
        };
        await status.destroy();
        res.status(200).send({
            message: `Status deleted successfully! Id: ${statusId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateStatus = async (req, res) => {
    try {
        const userId = req.user.id;
        const statusId = req.params.id;
        const status = await Status.findOne({ where: { [Op.and]: [{ id: statusId }, { user_id: userId }] } });
        if (!status) {
            return res.status(400).send({ message: "Status is not present!" });
        };
        await status.update({
            ...status,
            status: req.body.status
        });
        res.status(200).send({ message: `Status modified successfully! ID: ${statusId}}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
