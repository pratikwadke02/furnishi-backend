const db = require('../../models');
const Source = db.source;

exports.create = async (req, res) => {
    try{
        var sourceCode;
        await Source.findAll().then(data => {
            if(data.length == 0){
                sourceCode = 'SC100500';
            }else{
                var lastSourceCode = data[data.length - 1].sourceCode;
                var lastDigits = lastSourceCode.substring(2, 8);
                var incrementedDigits = parseInt(lastDigits, 10) + 1;
                sourceCode = 'SC' + incrementedDigits;
            }
        });
        await Source.create({
            sourceCode: sourceCode,
            source: req.body.source,
            firmName: req.body.firmName,
            firmAddress: req.body.firmAddress,
            emailId: req.body.emailId,
            contactNumberOne: req.body.contactNumberOne,
            contactNumberTwo: req.body.contactNumberTwo,
            cordinatorName: req.body.cordinatorName,
            cordinatorNumber: req.body.cordinatorNumber,
        }).then(data => {
            res.status(200).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Source."
            });
        });
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
