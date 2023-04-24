const db = require('../../models');
const Factory = db.factory;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        await Factory.create({
            ...req.body,
            user_id: req.user.id
        });
        res.status(200).send({ message: "Factory created successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const factories = await Factory.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(factories);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.deletefactory = async (req, res) => {
    try {
        const userId = req.user.id;
        const factoryId = req.params.id;
        const factory = await Factory.findOne({ where: { [Op.and]: [{ id: factoryId }, { user_id: userId }] } });
        if (!factory) {
            return res.status(400).send({ message: "Factory is not present!" });
        };
        await factory.destroy();
        res.status(200).send({
            message: `Factory deleted successfully! Id: ${factoryId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateFactory = async (req, res) => {
    try {
        const userId = req.user.id;
        const factoryId = req.params.id;
        const { companyName, companyAddress, contactNumber, website, gstNumber, manager, managerEmailId } = req.body;
        const factory = await Factory.findOne({ where: { [Op.and]: [{ id: factoryId }, { user_id: userId }] } });
        if (!factory) {
            return res.status(400).send({ message: "Factory is not present!" });
        };
        await factory.update({
            ...factory,
            companyName: companyName,
            companyAddress: companyAddress,
            contactNumber: contactNumber,
            manager: manager,
            managerEmailId: managerEmailId,
            website: website,
            gstNumber: gstNumber
        });
        res.status(200).send({ message: `Factory modified successfully! ID: ${factoryId}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}