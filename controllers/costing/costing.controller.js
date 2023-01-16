const db = require("../../models");
const EnquiryCosting = db.enquiryCosting;

exports.findEnquiryCosting = async (req, res) => {
    try {
        await EnquiryCosting.findAll({
        where: {
            id: 1,
        },
        }).then((data) => {
        res.send(data);
        }
        );
    } catch (err) {
        res.status(500).send({
        message: err.message || "Some error occurred while retrieving Enquiry Costing.",
        });
    }
};

