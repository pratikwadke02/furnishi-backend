const db = require('../../models');
const Enquiry = db.enquiry;

exports.create = async(req, res) => {
    try{
        var orderNumber;
        await Enquiry.findAll().then(data => {
            if(data.length === 0){
                orderNumber = 'ON100500';
            }
            else{
                var lastOrderNumber = data[data.length - 1].orderNumber;
                var lastOrderNumberNumber = parseInt(lastOrderNumber.substring(2));
                orderNumber = 'ON' + (lastOrderNumberNumber + 1);
            }
        });
        await Enquiry.create({
            orderNumber: orderNumber,
            targetDate: req.body.targetDate,
            sitePincode: req.body.sitePincode,
            product: req.body.product,
            area: req.body.area,
            currentStatus: req.body.currentStatus,
            carcass: req.body.carcass,
            shutter: req.body.shutter,
            workStartTime: req.body.workStartTime,
            workEndTime: req.body.workEndTime,
            dispatch: req.body.dispatch,
            estimate: req.body.estimate,
            action: req.body.action
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Order."
            });
        }
        );
    }catch(error){
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Enquiry."
        });
    }
};

exports.findAll = async(req, res) => {
    try{
        await Enquiry.findAll().then(data => {
            res.send(data);
        });
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Enquiry."
        });
    }
};