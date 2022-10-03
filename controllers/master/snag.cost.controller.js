const db = require('../../models');
const SnagCost = db.snagCost;

exports.create = async (req, res) => {
    try{
        var costCode;
        const snagCosts = await SnagCost.findAll();
        if(snagCosts.length == 0){
            costCode = "SC100500";
        }
        else{
            var lastSnagCost = snagCosts[snagCosts.length - 1];
            var lastDigits = lastSnagCost.costCode.substring(2, 8);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            costCode = "SC" + incrementedDigits;
        }
        await SnagCost.create({
            costCode: costCode,
            cost: req.body.cost,
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Snag Cost."
            });
        }
        );
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

exports.findAll = async (req, res) => {
    try{
        const snagCosts = await SnagCost.findAll();
        res.status(200).send(snagCosts);
    }catch(err){
        res.status(500).send({message: err.message});
    }
}

