const db = require('../../models');
const SnagAction = db.snagAction;

exports.create = async (req, res) => {
    try{
        await SnagAction.create(req.body);
        res.status(200).send({message: "Snag Action created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const snagActions = await SnagAction.findAll();
        res.status(200).send(snagActions);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
