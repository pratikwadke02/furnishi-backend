const db = require('../../models');
const StatusAction = db.statusAction;

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

