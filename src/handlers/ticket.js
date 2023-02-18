const ticket = require('../controllers/ticket');
const validator = require('../middlewares/validators/index');
const newTicketSpec = require('../middlewares/validators/ticketSchema');

const routes = [
    {
        path: "/tickets/new",
        middlewares: [validator(newTicketSpec)],
        method: 'post',
        action: ticket.createTicket
    }
]

module.exports = routes;
