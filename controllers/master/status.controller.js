const db = require('../../models');
const Status = db.status;

exports.create = async (req, res) => {
    try{
        await Status.create(req.body);
        res.status(200).send({message: "Status created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const statuses = await Status.findAll();
        res.status(200).send(statuses);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

