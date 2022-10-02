const db = require('../../models');
const SnagCost = db.snagCost;

exports.create = async (req, res) => {
    try{
        await SnagCost.create(req.body);
        res.status(200).send({message: "Snag Cost created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const snagCosts = await SnagCost.findAll();
        res.status(200).send(snagCosts);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

