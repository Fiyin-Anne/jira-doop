const validateSpec = require('./indexSchema');
const normalizeResponse = require('../../helpers/normalize-response');

module.exports = (schema) => {

    const validateSchema = (req, res, next) => {
        let result;
        let data = {};

        if (req.query) {
            Object.assign(data, req.query);
        }
        if (req.params) {
            Object.assign(data, req.params);
        }
        if (req.body) {
            Object.assign(data, req.body);
        }

        try {
            result  = validateSpec.validate({schema, data});
            return next();
        } catch (error) {
            normalizeResponse.respF(res, null, error.message)
        }
    }

    return validateSchema;

}