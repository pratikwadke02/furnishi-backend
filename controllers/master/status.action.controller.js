const db = require('../../models');
const StatusAction = db.statusAction;

exports.create = async (req, res) => {
    try{
        await StatusAction.create(req.body);
        res.status(200).send({message: "StatusAction created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const statusActions = await StatusAction.findAll();
        res.status(200).send(statusActions);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

