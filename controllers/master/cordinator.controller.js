const db = require('../../models');
const Cordinator = db.cordinator;

exports.create = async (req, res) => {
    try{
        console.log(req.body);
        var cordinatorCode;
        const coordinators = await Cordinator.findAll();
        if(coordinators.length == 0){
            cordinatorCode = "C100501";
        }
        else{
            var lastCordinator = coordinators[coordinators.length - 1];
            var lastDigits = lastCordinator.cordinatorCode.substring(1, 8);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            cordinatorCode = "C" + incrementedDigits;
        }
        await Cordinator.create({
            cordinatorCode: cordinatorCode,
            sourceCode: req.body.sourceCode,
            source: req.body.source,
            firmName: req.body.firmName,
            firmAddress: req.body.firmAddress,
            cordinatorType: req.body.cordinatorType,
            cordinatorName: req.body.cordinatorName,
            cordinatorNumber: req.body.cordinatorNumber,
            cordinatorEmailID: req.body.emailId,
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            console.log(err),
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Cordinator."
            });
        }
        );   
    }catch(err){
        console.log(err),
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


