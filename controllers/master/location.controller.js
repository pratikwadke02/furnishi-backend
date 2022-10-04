const db = require('../../models');
const Location = db.location;

exports.create = async (req, res) => {
    try{
        console.log(req.body);
        const location = await Location.create(req.body);
        res.status(200).send(location);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const locations = await Location.findAll();
        res.status(200).send(locations);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
