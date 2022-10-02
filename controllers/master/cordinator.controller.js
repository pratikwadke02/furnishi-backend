const db = require('../../models');
const Cordinator = db.cordinator;

exports.create = async (req, res) => {
    try{
        await Cordinator.create(req.body);
        res.status(200).send({message: "Cordinator created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
};

exports.findAll = async (req, res) => {
    try{
        const coordinators = await Cordinator.findAll();
        res.status(200).send(coordinators);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}


