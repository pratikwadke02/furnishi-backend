const db = require('../../models');
const SnagAction = db.snagAction;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var actionCode;
        const snagActions = await SnagAction.findAll();
        if (snagActions.length == 0) {
            actionCode = "SA100500";
        }
        else {
            var lastSnagAction = snagActions[snagActions.length - 1];
            var lastDigits = lastSnagAction.actionCode.substring(2, 8);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            actionCode = "SA" + incrementedDigits;
        }
        await SnagAction.create({
            actionCode: actionCode,
            action: req.body.action,
            user_id: req.user.id
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Snag Action."
            });
        }
        );
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const snagActions = await SnagAction.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(snagActions);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.deleteSnagAction = async (req, res) => {
    try {
        const userId = req.user.id;
        const snagActionId = req.params.id;
        const snagAction = await SnagAction.findOne({ where: { [Op.and]: [{ id: snagActionId }, { user_id: userId }] } });
        if (!snagAction) {
            return res.status(400).send({ message: "Snag Action is not present!" });
        };
        await snagAction.destroy();
        res.status(200).send({
            message: `Snag Action deleted successfully! Id: ${snagActionId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateSnagAction = async (req, res) => {
    try {
        const userId = req.user.id;
        const snagActionId = req.params.id;
        const snagAction = await SnagAction.findOne({ where: { [Op.and]: [{ id: snagActionId }, { user_id: userId }] } });
        if (!snagAction) {
            return res.status(400).send({ message: "Snag Action is not present!" });
        };
        await snagAction.update({
            ...snagAction,
            action: req.body.action
        });
        res.status(200).send({ message: `Snag Action modified successfully! ID: ${snagActionId}}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
