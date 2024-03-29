const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const db = require('../models');
const User = db.user;

exports.registerValidate = (data) => {
    const schema = joi.object().keys({
        firstName: joi.string().min(3).max(30).required(),
        lastName: joi.string().min(3).max(30).required(),
        email: joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Password'),
        confirmPassword: joi.ref('password'),
    });
    return schema.validate(data);
}

exports.assistantValidate = (data) => {
    const schema = joi.object().keys({
        email: joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Password'),
        confirmPassword: joi.ref('password'),
    });
    return schema.validate(data);
}

exports.partnerValidate = (data) => {
    const schema = joi.object().keys({
        email: joi.string().email().required().label('Email'),
        password: passwordComplexity().required().label('Password'),
        confirmPassword: joi.ref('password'),
    });
    return schema.validate(data);
}