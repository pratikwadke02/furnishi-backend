const db = require('../models');
const Partner = db.partner;

checkDuplicatePartner = (req, res, next) => {
    // Email
    Partner.findOne({
        where: {
            email: req.body.email
        }
    }).then(partner => {
        if (partner) {
            res.status(400).send({
                message: "Failed! Email is already in use!"
            });
            return;
        }
        next();
    });
};

const verifySignUp = {
    checkDuplicatePartner: checkDuplicatePartner
};

module.exports = verifySignUp;