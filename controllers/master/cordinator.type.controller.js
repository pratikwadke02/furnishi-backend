const db = require('../../models');
const CordinatorType = db.cordinatorType;

exports.create = async (req, res) => {
    try{
        await CordinatorType.create(req.body);
        res.status(200).send({message: "Cordinator Type created successfully"});
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const cordinatorTypes = await CordinatorType.findAll();
        res.status(200).send(cordinatorTypes);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

