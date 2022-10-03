const db = require('../../models');
const WorkType = db.workType;

exports.create = async (req, res) => {
    try{
        var workTypeCode;
        const workTypes = await WorkType.findAll();
        if(workTypes.length == 0){
            workTypeCode = "WT100500";
        }else{
            var lastWorkType = workTypes[workTypes.length - 1];
            var lastDigits = lastWorkType.workTypeCode.substring(2, 8);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            workTypeCode = "WT" + incrementedDigits;
        }
        await WorkType.create({
            workTypeCode: workTypeCode,
            workType: req.body.workType,
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Work Type."
            });
        });
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const workTypes = await WorkType.findAll();
        res.status(200).send(workTypes);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}
