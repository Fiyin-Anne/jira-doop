const User = require('../services/user');
const normalizeResponse = require('../helpers/normalize-response');

module.exports = {

    createUser: async (req, res) => {
        User.createUser(req.body)
        .then(response => {
            normalizeResponse.respS(res, response, null);
        })
        .catch(error => {
            normalizeResponse.respF(res, null, error.message);
        })
    },

    userLogin: async (req, res) => {
        User.login(req.body)
        .then(response => {
            normalizeResponse.respS(res, response, null);
        })
        .catch(error => {
            normalizeResponse.respF(res, null, error.message);
        })
    },

    verifyUser: async (req, res) => {
        User.verify(req.query)
        .then(response => {
            normalizeResponse.respS(res, response, null);
        })
        .catch(error => {
            normalizeResponse.respF(res, null, error.message);
        })
    }


}