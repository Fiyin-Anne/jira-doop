const joi = require('joi');

const newTicketSpec = joi.object({
    title: joi.string().trim().max(225).required().messages({
        'string.max': "Please use a shorter title.",
    }),
    description: joi.string().trim().max(22200).messages({
        'string.max': "Please use a shorter description.",
    }),
    status: joi.string().trim().valid("pending", "in development", "ready for testing", "in testing, done").default("pending"),
    priority: joi.string().trim().valid("low", "medium", "high").required(),
    assigner: joi.number(),
    userId: joi.number().required(),
    approver: joi.number(),
    approved: joi.number()
}).required();

module.exports = newTicketSpec;