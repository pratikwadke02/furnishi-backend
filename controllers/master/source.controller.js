const db = require('../../models');
const Source = db.source;

exports.create = async (req, res) => {
    try{
        await Source.create(req.body);
        res.status(200).send({message: "Source created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const sources = await Source.findAll();
        res.status(200).send(sources);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
