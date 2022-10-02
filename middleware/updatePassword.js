const joi = require('joi');
const passwordComplexity = require('joi-password-complexity');
const db = require('../models');
const User = db.user;

exports.passwordValidate = (data) => {
    const schema = joi.object().keys({
        password: passwordComplexity().required().label('Password'),
        confirmPassword: joi.ref('password'),
    });
    return schema.validate(data);
}