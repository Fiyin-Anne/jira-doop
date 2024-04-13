const Ticket = require('../services/ticket');
const normalizeResponse = require('../helpers/normalize-response');

module.exports = {

    createTicket: async (req, res) => {
        Ticket.createTicket(req.body)
        .then(response => {
            normalizeResponse.respS(res, response);
        })
        .catch(error => {
            normalizeResponse.respF(res, null, error.message);
        })
    },

    getTicket: async (req, res) => {
        Ticket.getTicket(req.body)
        .then(response => {
            normalizeResponse.respS(res, response);
        })
        .catch(error => {
            normalizeResponse.respF(res, null, error.message);
        })
    }
}