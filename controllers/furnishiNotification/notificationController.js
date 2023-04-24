const db = require('../../models');
const { Op } = require("sequelize");
const Notification = db.notification;

exports.createNotification = async (req, res) => {
    try {
        const { title, description, sendTo } = req.body;
        await Notification.create({
            title: title,
            description: description,
            sendTo: sendTo,
            furnishiUser_id: req.furnishiUser.id
        }).then(data => {
            res.send(data);
        }
        ).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Notification."
            });
        }
        );
    } catch (error) {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Notification."
        });
    }
};

exports.findUserNotification = async (req, res) => {
    try {
        await Notification.findAll({ where: { [Op.or]: [{ sendTo: "All" }, { sendTo: "Factory Manager" }] } }).then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Notification."
        });
    }
};

exports.findPartnerNotification = async (req, res) => {
    try {
        await Notification.findAll({ where: { [Op.or]: [{ sendTo: "All" }, { sendTo: "Partner" }] } }).then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Notification."
        });
    }
};

exports.findAdminNotification = async (req, res) => {
    try {
        await Notification.findAll({ where: { [Op.or]: [{ sendTo: "All" }, { sendTo: "Admin" }] } }).then(data => {
            res.send(data);
        });
    } catch (err) {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Notification."
        });
    }
};

// Admin can delete
exports.deleteNotification = async (req, res) => {
    try {
        const notificationId = req.params.id;
        const notification = await Notification.findOne({ where: { id: notificationId } });
        if (!notification) {
            return res.status(400).send({ message: "Notification is not present!" });
        };
        await notification.destroy();
        res.status(200).send({
            message: `Notification deleted successfully! Id: ${notificationId}`
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
};

// Admin can update
exports.updateNotification = async (req, res) => {
    try {
        const notificationId = req.params.id;
        const { title, description, sendTo } = req.body;
        const notification = await Notification.findOne({ where: { id: notificationId } });
        if (!notification) {
            return res.status(400).send({ message: "Notification is not present!" });
        };
        await notification.update({
            ...notification,
            title: title,
            description: description,
            sendTo: sendTo
        });
        res.status(200).send({ message: `Notification modified successfully! ID: ${notificationId}` });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }
}