const db = require('../../models');
const StatusAction = db.statusAction;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var statusActionCode;
        const statusActions = await StatusAction.findAll();
        if (statusActions.length == 0) {
            statusActionCode = "STA100500";
        }
        else {
            var lastStatusAction = statusActions[statusActions.length - 1];
            var lastDigits = lastStatusAction.statusActionCode.substring(3, 9);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            statusActionCode = "STA" + incrementedDigits;
        }
        await StatusAction.create({
            statusActionCode: statusActionCode,
            statusAction: req.body.statusAction,
            user_id: req.user.id
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Status Action."
            });
        }
        );
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const statusActions = await StatusAction.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(statusActions);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.deleteStatusAction = async (req, res) => {
    try {
        const userId = req.user.id;
        const statusActionId = req.params.id;
        const statusAction = await StatusAction.findOne({ where: { [Op.and]: [{ id: statusActionId }, { user_id: userId }] } });
        if (!statusAction) {
            return res.status(400).send({ message: "Status Action is not present!" });
        };
        await statusAction.destroy();
        res.status(200).send({
            message: `Status Action deleted successfully! Id: ${statusActionId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateStatusAction = async (req, res) => {
    try {
        const userId = req.user.id;
        const statusActionId = req.params.id;
        const statusAction = await StatusAction.findOne({ where: { [Op.and]: [{ id: statusActionId }, { user_id: userId }] } });
        if (!statusAction) {
            return res.status(400).send({ message: "Status Action is not present!" });
        };
        await statusAction.update({
            ...statusAction,
            statusAction: req.body.statusAction
        });
        res.status(200).send({ message: `Status Action modified successfully! ID: ${statusActionId}}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
