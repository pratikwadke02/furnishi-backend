const db = require('../../models');
const Partner = db.partner;
const partnerValidate = require('../../middleware/register').partnerValidate;

// Register a new Partner
exports.register = async (req, res) => {
    try{

    }catch(error){
        res.status(500).send({message: error.message});
    }
};
