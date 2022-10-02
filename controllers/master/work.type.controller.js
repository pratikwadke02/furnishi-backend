const db = require('../../models');
const WorkType = db.workType;

exports.create = async (req, res) => {
    try{
        await WorkType.create(req.body);
        res.status(200).send({message: "Work Type created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const workTypes = await WorkType.findAll();
        res.status(200).send(workTypes);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
