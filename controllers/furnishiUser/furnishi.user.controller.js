const db = require('../../models');
const FurnishiUser = db.furnishiUser;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = require('../../middleware/register.js');
const login = require('../../middleware/login.js');


const SALT = 10;

exports.register = async (req, res) => {
    try {
        console.log(req.body);
        const { error } = register.registerValidate(req.body);
        if (error) {
            console.log(error);
            return res.status(400).send(error.details[0].message);
        }
        const isFurnishiUser = await FurnishiUser.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (isFurnishiUser) {
            return res.status(400).send(' Furnishi User already registered.');
        }
        const salt = await bcrypt.genSalt(SALT);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const furnishiUser = await FurnishiUser.create({
            ...req.body,
            password: hashedPassword,
        });

        const data = {
            id: furnishiUser.id
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET_KEY);
        res.status(200).send({
            message: "Furnishi User registered successfully",
            data: furnishiUser,
            authToken: authToken
        });
    } catch (err) {
        console.log(err);
        res.status(500).send(err);
    }

}

exports.login = async (req, res) => {
    try {
        console.log(req.body);
        const { error } = login.loginValidate(req.body);
        if (error) {
            console.log(error);
            return res.status(400).send(error.details[0].message);
        }
        const furnishiUser = await FurnishiUser.findOne({
            where: {
                email: req.body.email,
            }
        });
        if (!furnishiUser) {
            return res.status(400).send('Invalid email or password.');
        }
        const validPassword = await bcrypt.compare(req.body.password, furnishiUser.password);
        if (!validPassword) {
            return res.status(400).send('Invalid email or password.');
        }
        const data = {
            id: furnishiUser.id
        }
        const authToken = jwt.sign(data, process.env.JWT_SECRET_KEY);
        res.status(200).send({
            message: "Furnishi User loged in successfully",
            data: furnishiUser,
            authToken: authToken
        });
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}

exports.findAll = async (req, res) => {
    try {
        const furnishiUsers = await FurnishiUser.findAll();
        res.send(furnishiUsers);
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
}
