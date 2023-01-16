const db = require('../../models');
const FurnishiUser = db.furnishiUser;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const register = require('../../middleware/register.js');
const login = require('../../middleware/login.js');


const SALT = 10;

exports.register = async (req, res) => {
    try{
    console.log(req.body);
    const { error } = register.registerValidate(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
    }
    const user = await FurnishiUser.findOne({
        where: {
            email: req.body.email,
        }
    });
    if (user) {
        return res.status(400).send('User already registered.');
    }
    const salt = await bcrypt.genSalt(SALT);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    await FurnishiUser.create({
        ...req.body,
        password: hashedPassword,
    });
    res.send({data: req.body});
}catch(err){
    console.log(err);
    res.status(500).send(err);
}
    
}

exports.login = async (req, res) => {
    try{
        console.log(req.body);
        const {error} = login.loginValidate(req.body);
        if(error){
            console.log(error);
            return res.status(400).send(error.details[0].message);
        }
        const user = await FurnishiUser.findOne({
            where: {
                email: req.body.email,
            }
        });
        if(!user){
            return res.status(400).send('Invalid email or password.');
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if(!validPassword){
            return res.status(400).send('Invalid email or password.');
        }
        res.send({
            data: user,
        });
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

exports.findAll = async (req, res) => {
    try{
        const users = await FurnishiUser.findAll();
        res.send(users);
    }catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}
