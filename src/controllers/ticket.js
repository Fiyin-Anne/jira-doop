const Ticket = require('../services/ticket');
const normalizeResponse = require('../helpers/normalize-response');

module.exports = {

    createTicket: async (req, res) => {
        Ticket.createTicket(req.body)
        .then(response => {
            normalizeResponse.respS(res, response, message);
        })
        .catch(error => {
            normalizeResponse.respF(res, null, error.message);
        })
    }


}