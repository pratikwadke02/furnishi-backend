const db = require("../../models");
const Designer = db.designer;

exports.create = async (req, res) => {
    try {
        var designerCode;
        await Designer.findAll().then(data => {
            if (data.length === 0) {
                designerCode = 'D100500';
            } else {
                var lastDesignerCode = data[data.length - 1].designerCode;
                var lastDesignerCodeNumber = parseInt(lastDesignerCode.substring(1));
                designerCode = 'D' + (lastDesignerCodeNumber + 1);
            }
        });
        await Designer.create({
            designerCode: designerCode,
            designer: req.body.designer,
            user_id: req.user.id
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Designer."
            });
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Designer."
        });
    }
}

exports.findAll = async (req, res) => {
    try {
        await Designer.findAll({ where: { user_id: req.user.id } }).then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Designer."
        });
    }
}
