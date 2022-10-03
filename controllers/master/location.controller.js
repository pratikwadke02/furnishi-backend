const db = require('../../models');
const Location = db.location;

exports.create = async (req, res) => {
    try{
        await Location.create().then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Location."
            });
        }
        );
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
