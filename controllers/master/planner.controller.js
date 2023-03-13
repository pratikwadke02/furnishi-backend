const db = require("../../models");
const Planner = db.planner;

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
