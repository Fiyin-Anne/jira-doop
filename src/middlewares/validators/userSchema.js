const joi = require('joi');

const newUserSpec = joi.object({
    fullname: joi.string().trim().max(225).required().messages({
        'string.max': "Please use a shorter name.",
    }),
    email: joi.string().email().required(),
    teamId: joi.number(),
    role: joi.string().trim(),
    active: joi.boolean().default('active')
}).required();

const invitedUserSpec = joi.object({
    fullname: joi.string().trim().max(225).required().messages({
        'string.max': "Please use a shorter name.",
    }),
    email: joi.string().email().required(),
    role: joi.string().trim().default('guest'),
    active: joi.boolean().default('active')
}).required();

const loginUserSpec = joi.object({
    email: joi.string().email().required().messages({
        'any.required': "Email is required.",
    }),
}).required();

const verifyUserSpec = joi.object({
    token: joi.string().trim().required().messages({
        'any.required': "Token is required.",
    })
}).required();

module.exports = {newUserSpec, invitedUserSpec, loginUserSpec, verifyUserSpec};
