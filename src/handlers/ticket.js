const ticket = require('../controllers/ticket');
const express = require('express');
const router = express.Router();
const ATSRouter = require('./index');
const validator = require('../middlewares/validators/index');
const newTicketSpec = require('../middlewares/validators/ticketSchema');

const handler_hash = { 
    "/api/ticket/new": {
        path: "/new",
        middlewares: [validator(newTicketSpec)],
        method: 'post',
        action: ticket.createTicket
    }
}

const ticketHandler = () => {

    let newrouter = router;
    for (const item in handler_hash) {

        let handler_item = handler_hash[item];
        handler_item.router = newrouter;
        newrouter = new ATSRouter(handler_item); //atsrouter returns the router object
    }

    return newrouter;
}

module.exports = ticketHandler();