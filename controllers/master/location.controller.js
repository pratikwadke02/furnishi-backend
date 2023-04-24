const db = require('../../models');
const Location = db.location;
const { Op } = require("sequelize");

exports.create = async (req, res) => {
    try {
        // console.log(req.body);
        const location = await Location.create({
            ...req.body,
            user_id: req.user.id
        });
        res.status(200).send(location);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.findAll = async (req, res) => {
    try {
        const locations = await Location.findAll({ where: { user_id: req.user.id } });
        res.status(200).send(locations);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

exports.deleteLocation = async (req, res) => {
    try {
        const userId = req.user.id;
        const locationId = req.params.id;
        const location = await Location.findOne({ where: { [Op.and]: [{ id: locationId }, { user_id: userId }] } });
        if (!location) {
            return res.status(400).send({ message: "Location is not present!" });
        };
        await location.destroy();
        res.status(200).send({
            message: `Location deleted successfully! Id: ${locationId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

exports.updateLocation = async (req, res) => {
    try {
        const userId = req.user.id;
        const locationId = req.params.id;
        const location = await Location.findOne({ where: { [Op.and]: [{ id: locationId }, { user_id: userId }] } });
        if (!location) {
            return res.status(400).send({ message: "Location is not present!" });
        };
        await location.update({
            ...location,
            pincode: req.body.pincode,
            name:req.body.name
        });
        res.status(200).send({ message: `Location modified successfully! ID: ${locationId}}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}
