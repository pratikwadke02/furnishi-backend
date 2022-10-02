const db = require('../../models');
const WorkPartner = db.workPartnerrk;

exports.create = async (req, res) => {
    try{
        await WorkPartner.create(req.body);
        res.status(200).send({message: "Work created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const works = await WorkPartner.findAll();
        res.status(200).send(works);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
