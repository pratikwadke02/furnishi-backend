const db = require('../../models');
const CordinatorType = db.cordinatorType;

exports.create = async (req, res) => {
    try{
        var cordinatorTypeCode;
        const cordinatorTypes = await CordinatorType.findAll();
        if(cordinatorTypes.length == 0){
            cordinatorTypeCode = "CT100500";
        }else{
            var lastCordinatorType = cordinatorTypes[cordinatorTypes.length - 1];
            var lastDigits = lastCordinatorType.cordinatorTypeCode.substring(2, 8);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            cordinatorTypeCode = "CT" + incrementedDigits;
        }
        await CordinatorType.create({
            cordinatorTypeCode: cordinatorTypeCode,
            cordinatorType: req.body.cordinatorType,
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Cordinator Type."
            });
        });
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

