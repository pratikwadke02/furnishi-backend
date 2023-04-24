const db = require("../../models");
const Planner = db.planner;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var plannerCode;
        await Planner.findAll().then(data => {
            if (data.length === 0) {
                plannerCode = 'P100500';
            } else {
                var lastPlannerCode = data[data.length - 1].plannerCode;
                var lastPlannerCodeNumber = parseInt(lastPlannerCode.substring(1));
                plannerCode = 'P' + (lastPlannerCodeNumber + 1);
            }
        });
        await Planner.create({
            plannerCode: plannerCode,
            planner: req.body.planner,
            user_id: req.user.id
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Planner."
            });
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Planner."
        });
    }
}


exports.findAll = async (req, res) => {
    try {
        await Planner.findAll({ where: { user_id: req.user.id } }).then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Planner."
        });
    }
}

exports.deletePlanner = async (req, res) => {
    try {
        const userId = req.user.id;
        const plannerId = req.params.id;
        const planner = await Planner.findOne({ where: { [Op.and]: [{ id: plannerId }, { user_id: userId }] } });
        if (!planner) {
            return res.status(400).send({ message: "Planner is not present!" });
        };
        await planner.destroy();
        res.status(200).send({
            message: `Planner deleted successfully! Id: ${plannerId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updatePlanner = async (req, res) => {
    try {
        const userId = req.user.id;
        const plannerId = req.params.id;
        const planner = await Planner.findOne({ where: { [Op.and]: [{ id: plannerId }, { user_id: userId }] } });
        if (!planner) {
            return res.status(400).send({ message: "Planner is not present!" });
        };
        await planner.update({
            ...planner,
            planner: req.body.planner
        });
        res.status(200).send({ message: `Planner modified successfully! ID: ${plannerId}}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
