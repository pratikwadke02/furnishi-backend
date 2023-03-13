const db = require('../../models');
const SnagAction = db.snagAction;

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
