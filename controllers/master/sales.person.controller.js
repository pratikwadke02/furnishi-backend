const db = require("../../models");
const SalesPerson = db.salesPerson;

exports.create = async(req, res) => {
    try{
        var salesPersonCode;
        await SalesPerson.findAll().then(data => {
            if(data.length === 0){
                salesPersonCode = 'SP100500';
            }else{
                var lastSalesPersonCode = data[data.length - 1].salesPersonCode;
                var lastSalesPersonCodeNumber = parseInt(lastSalesPersonCode.substring(2));
                salesPersonCode = 'SP' + (lastSalesPersonCodeNumber + 1);
            }
        });
        await SalesPerson.create({
            salesPersonCode: salesPersonCode,
            salesPerson: req.body.salesPerson,
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Sales Person."
            });
        });
    }catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Sales Person."
        });
    }
}
