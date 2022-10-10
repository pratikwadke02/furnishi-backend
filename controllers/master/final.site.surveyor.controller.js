const db = require("../../models");
const FinalSiteSurveyor = db.finalSiteSurveyor;

exports.create = async(req, res) => {
    try{
        var finalSiteSurveyorCode;
        await FinalSiteSurveyor.findAll().then(data => {
            if(data.length === 0){
                finalSiteSurveyorCode = 'FSS100500';
            }else{
                var lastFinalSiteSurveyorCode = data[data.length - 1].finalSiteSurveyorCode;
                var lastFinalSiteSurveyorCodeNumber = parseInt(lastFinalSiteSurveyorCode.substring(3));
                finalSiteSurveyorCode = 'FSS' + (lastFinalSiteSurveyorCodeNumber + 1);
            }
        });
        await FinalSiteSurveyor.create({
            finalSiteSurveyorCode: finalSiteSurveyorCode,
            finalSiteSurveyor: req.body.finalSiteSurveyor,
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Final Site Surveyor."
            });
        });
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Final Site Surveyor."
        });
    }
};

exports.findAll = async(req, res) => {
    try{
        await FinalSiteSurveyor.findAll().then(data => {
            res.send(data);
        });
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Final Site Surveyor."
        });
    }
}
