const db = require("../../models");
const Panel = db.panel;

exports.create = async (req, res) => {
    try {
        var panelCode;
        await Panel.findAll().then(data => {
            if (data.length === 0) {
                panelCode = 'PN100500';
            } else {
                var lastPanelCode = data[data.length - 1].panelCode;
                var lastPanelNumber = parseInt(lastPanelCode.substring(2));
                panelCode = 'PN' + (lastPanelNumber + 1);
            }
        });
        await Panel.create({
            panelCode: panelCode,
            panel: req.body.panel,
            user_id: req.user.id
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Panel."
            });
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Panel."
        });
    }
}


exports.findAll = async (req, res) => {
    try {
        await Panel.findAll({ where: { user_id: req.user.id } }).then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Panel."
        });
    }
}
