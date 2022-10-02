const db = require('../../models');
const Factory = db.factory;

exports.create = async (req, res) => {
    try{
        await Factory.create(req.body);
        res.status(200).send({message: "Factory created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const factories = await Factory.findAll();
        res.status(200).send(factories);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}