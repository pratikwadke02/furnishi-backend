const db = require("../../models");
const Panel = db.panel;
const { Op } = require("sequelize");

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

exports.deletePanel = async (req, res) => {
    try {
        const userId = req.user.id;
        const panelId = req.params.id;
        const panel = await Panel.findOne({ where: { [Op.and]: [{ id: panelId }, { user_id: userId }] } });
        if (!panel) {
            return res.status(400).send({ message: "panel is not present!" });
        };
        await panel.destroy();
        res.status(200).send({
            message: `Panel deleted successfully! Id: ${panelId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updatePanel = async (req, res) => {
    try {
        const userId = req.user.id;
        const panelId = req.params.id;
        const panel = await Panel.findOne({ where: { [Op.and]: [{ id: panelId }, { user_id: userId }] } });
        if (!panel) {
            return res.status(400).send({ message: "Panel is not present!" });
        };
        await panel.update({
            ...panel,
            panel: req.body.panel
        });
        res.status(200).send({ message: `Panel modified successfully! ID: ${panelId}}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
