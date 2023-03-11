const ticket = require('../controllers/ticket');
const validator = require('../middlewares/validators/index');
const {newTicketSpec, getTicketSpec} = require('../middlewares/validators/ticketSchema');

const routes = [
    {
        path: "/tickets/new",
        middlewares: [validator(newTicketSpec)],
        method: 'post',
        action: ticket.createTicket
    },
    {
        path: "/tickets/:id",
        middlewares: [validator(getTicketSpec)],
        method: 'get',
        action: ticket.getTicket
    }
]

module.exports = routes;
