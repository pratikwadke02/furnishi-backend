const db = require('../../models');
const SurveyPartner = db.surveyPartner;

exports.create = async (req, res) => {
    try{
        await SurveyPartner.create(req.body);
        res.status(200).send({message: "Survey created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const surveys = await SurveyPartner.findAll();
        res.status(200).send(surveys);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
