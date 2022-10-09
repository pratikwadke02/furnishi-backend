const db = require("../../models");
const Carcass = db.carcass;

exports.create = async(req, res) => {
    try{
        var carcassCode;
        await Carcass.findAll().then(data => {
            if(data.length === 0){
                carcassCode = 'C100500';
            }else{
                var lastCarcassCode = data[data.length - 1].carcassCode;
                var lastCarcassCodeNumber = parseInt(lastCarcassCode.substring(1));
                carcassCode = 'C' + (lastCarcassCodeNumber + 1);
            }
        });
        await Carcass.create({
            carcassCode: req.body.carcassCode,
            carcass: req.body.carcass,
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Carcass."
            });
        });
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Carcass."
        });
    }
};