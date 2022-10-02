const db = require('../../models');
const SnagSolution = db.snagSolution;

exports.create = async (req, res) => {
    try{
        await SnagSolution.create(req.body);
        res.status(200).send({message: "Snag Solution created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const snagSolutions = await SnagSolution.findAll();
        res.status(200).send(snagSolutions);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

