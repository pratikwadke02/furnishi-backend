const db = require("../models");
const User = db.user;
const FurnishiUser = db.furnishiUser;

exports.isUserPresent = async (req, res, next) => {
    const id = req.user.id;
    await User.findOne({ where: { id: id } }).then(user => {
        if (!user) {
            return res.status(400).send({
                message: 'Sorry! User is not present!'
            });
        }
        next();
    }).catch(error => {
        console.log("error: ", error);
    })
};

exports.isFurnishiUserPresent = async (req, res, next) => {
    const id = req.furnishiUser.id;
    await FurnishiUser.findOne({ where: { id: id } }).then(furnishiUser => {
        if (!furnishiUser) {
            return res.status(400).send({
                message: 'Sorry! Furnishi User is not present!'
            });
        }
        next();
    }).catch(error => {
        console.log("error: ", error);
    })
};