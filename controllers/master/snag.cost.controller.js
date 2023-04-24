const db = require('../../models');
const SnagCost = db.snagCost;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var costCode;
        const snagCosts = await SnagCost.findAll();
        if (snagCosts.length == 0) {
            costCode = "SC100500";
        }
        else {
            var lastSnagCost = snagCosts[snagCosts.length - 1];
            var lastDigits = lastSnagCost.costCode.substring(2, 8);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            costCode = "SC" + incrementedDigits;
        }
        await SnagCost.create({
            costCode: costCode,
            cost: req.body.cost,
            user_id: req.user.id
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Snag Cost."
            });
        }
        );
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const snagCosts = await SnagCost.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(snagCosts);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.deleteSnagCost = async (req, res) => {
    try {
        const userId = req.user.id;
        const snagCostId = req.params.id;
        const snagCost = await SnagCost.findOne({ where: { [Op.and]: [{ id: snagCostId }, { user_id: userId }] } });
        if (!snagCost) {
            return res.status(400).send({ message: "Snag Cost is not present!" });
        };
        await snagCost.destroy();
        res.status(200).send({
            message: `Snag Cost deleted successfully! Id: ${snagCostId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateSnagCost = async (req, res) => {
    try {
        const userId = req.user.id;
        const snagCostId = req.params.id;
        const snagCost = await SnagCost.findOne({ where: { [Op.and]: [{ id: snagCostId }, { user_id: userId }] } });
        if (!snagCost) {
            return res.status(400).send({ message: "Snag Cost is not present!" });
        };
        await snagCost.update({
            ...snagCost,
            cost: req.body.cost
        });
        res.status(200).send({ message: `Snag Cost modified successfully! ID: ${snagCostId}}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
