const db = require('../../models');
const Cordinator = db.cordinator;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        // console.log(req.user);
        var cordinatorCode;
        const coordinators = await Cordinator.findAll();
        if (coordinators.length == 0) {
            cordinatorCode = "C100501";
        }
        else {
            var lastCordinator = coordinators[coordinators.length - 1];
            var lastDigits = lastCordinator.cordinatorCode.substring(1, 8);
            var incrementedDigits = parseInt(lastDigits, 10) + 1;
            cordinatorCode = "C" + incrementedDigits;
        }
        await Cordinator.create({
            cordinatorCode: cordinatorCode,
            sourceCode: req.body.sourceCode,
            source: req.body.source,
            firmName: req.body.firmName,
            firmAddress: req.body.firmAddress,
            cordinatorType: req.body.cordinatorType,
            cordinatorName: req.body.cordinatorName,
            cordinatorNumber: req.body.cordinatorNumber,
            cordinatorEmailID: req.body.emailId,
            user_id: req.user.id
        }).then(data => {
            res.status(200).send(data);
        }
        ).catch(err => {
            console.log(err),
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Cordinator."
                });
        }
        );
    } catch (err) {
        console.log(err),
            res.status(500).send({ message: err.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const coordinators = await Cordinator.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(coordinators);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.deleteCordinator = async (req, res) => {
    try {
        const userId = req.user.id;
        const cordinatorId = req.params.id;
        const cordinators = await Cordinator.findOne({ where: { [Op.and]: [{ id: cordinatorId }, { user_id: userId }] } });
        if (!cordinators) {
            return res.status(400).send({ message: "Cordinator is not present!" });
        };
        await cordinators.destroy();
        res.status(200).send({
            message: `Cordinator deleted successfully! Id: ${cordinatorId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateCordinator = async (req, res) => {
    try {
        const userId = req.user.id;
        const cordinatorId = req.params.id;
        const cordinators = await Cordinator.findOne({ where: { [Op.and]: [{ id: cordinatorId }, { user_id: userId }] } });
        if (!cordinators) {
            return res.status(400).send({ message: "Cordinator is not present!" });
        };
        await cordinators.update({
            ...cordinators,
            sourceCode: req.body.sourceCode,
            source: req.body.source,
            firmName: req.body.firmName,
            firmAddress: req.body.firmAddress,
            cordinatorType: req.body.cordinatorType,
            cordinatorName: req.body.cordinatorName,
            cordinatorNumber: req.body.cordinatorNumber,
            cordinatorEmailID: req.body.emailId
        });
        res.status(200).send({ message: `Cordinator modified successfully! ID: ${cordinatorId}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}


