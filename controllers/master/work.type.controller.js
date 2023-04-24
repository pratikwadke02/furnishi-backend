const db = require('../../models');
const WorkType = db.workType;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var workTypeCode;
        const workTypes = await WorkType.findAll();
        if (workTypes.length == 0) {
            workTypeCode = "WT100500";
        } else {
            var lastWorkType = workTypes[workTypes.length - 1];
            var lastDigits = lastWorkType.workTypeCode.substring(2, 8);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            workTypeCode = "WT" + incrementedDigits;
        }
        await WorkType.create({
            workTypeCode: workTypeCode,
            workType: req.body.workType,
            user_id: req.user.id
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Work Type."
            });
        });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const workTypes = await WorkType.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(workTypes);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.deleteWorkType = async (req, res) => {
    try {
        const userId = req.user.id;
        const workTypeId = req.params.id;
        const workType = await WorkType.findOne({ where: { [Op.and]: [{ id: workTypeId }, { user_id: userId }] } });
        if (!workType) {
            return res.status(400).send({ message: "Work Type is not present!" });
        };
        await workType.destroy();
        res.status(200).send({
            message: `Work Type deleted successfully! Id: ${workTypeId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateWorkType = async (req, res) => {
    try {
        const userId = req.user.id;
        const workTypeId = req.params.id;
        const workType = await WorkType.findOne({ where: { [Op.and]: [{ id: workTypeId }, { user_id: userId }] } });
        if (!workType) {
            return res.status(400).send({ message: "Work Type is not present!" });
        };
        await workType.update({
            ...workType,
            workType: req.body.workType
        });
        res.status(200).send({ message: `Work Type modified successfully! ID: ${workTypeId}}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
