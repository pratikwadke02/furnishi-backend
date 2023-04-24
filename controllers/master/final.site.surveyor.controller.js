const db = require("../../models");
const FinalSiteSurveyor = db.finalSiteSurveyor;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        var finalSiteSurveyorCode;
        await FinalSiteSurveyor.findAll().then(data => {
            if (data.length === 0) {
                finalSiteSurveyorCode = 'FSS100500';
            } else {
                var lastFinalSiteSurveyorCode = data[data.length - 1].finalSiteSurveyorCode;
                var lastFinalSiteSurveyorCodeNumber = parseInt(lastFinalSiteSurveyorCode.substring(3));
                finalSiteSurveyorCode = 'FSS' + (lastFinalSiteSurveyorCodeNumber + 1);
            }
        });
        await FinalSiteSurveyor.create({
            finalSiteSurveyorCode: finalSiteSurveyorCode,
            finalSiteSurveyor: req.body.finalSiteSurveyor,
            user_id: req.user.id
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Final Site Surveyor."
            });
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Final Site Surveyor."
        });
    }
};

exports.findAll = async (req, res) => {
    try {
        await FinalSiteSurveyor.findAll({ where: { user_id: req.user.id } }).then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Final Site Surveyor."
        });
    }
}

exports.deleteFinalSiteSurveyor = async (req, res) => {
    try {
        const userId = req.user.id;
        const finalSiteSurveyorId = req.params.id;
        const finalSiteSurveyor = await FinalSiteSurveyor.findOne({ where: { [Op.and]: [{ id: finalSiteSurveyorId }, { user_id: userId }] } });
        if (!finalSiteSurveyor) {
            return res.status(400).send({ message: "Final Site Surveyor is not present!" });
        };
        await finalSiteSurveyor.destroy();
        res.status(200).send({
            message: `Final Site Surveyor deleted successfully! Id: ${finalSiteSurveyorId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateFinalSiteSurveyor = async (req, res) => {
    try {
        const userId = req.user.id;
        const finalSiteSurveyorId = req.params.id;
        const finalSiteSurveyor = await FinalSiteSurveyor.findOne({ where: { [Op.and]: [{ id: finalSiteSurveyorId }, { user_id: userId }] } });
        if (!finalSiteSurveyor) {
            return res.status(400).send({ message: "Final Site Surveyor is not present!" });
        };
        await finalSiteSurveyor.update({
            ...finalSiteSurveyor,
            finalSiteSurveyor: req.body.finalSiteSurveyor
        });
        res.status(200).send({ message: `Final Site Surveyor modified successfully! ID: ${finalSiteSurveyorId}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}