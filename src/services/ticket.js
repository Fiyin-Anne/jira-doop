const db = require('../../src/db/models');

class Ticket {
    constructor() {}

    createTicket = async (data) => {
    
        try {
            if(data.constructor.name !== "Object") throw new Error("Payload must be of object type.");

            let user = await db.User.findOne({ where: {
                id: data.userId
            }})
    
            if(!user) throw new Error("User not found.");
    
            let new_entry = await db.Ticket.create(data);
            
            return new_entry;
        } catch (error) {
            throw new Error(error.message);
        }
        
    }

    getTicket = async (data) => {
        try {

            let ticket = await db.Ticket.findOne({ where: { id: data.id}});
            if(!ticket) throw new Error("Ticket not found.");
            
            return ticket;

        } catch (error) {
            throw new Error(error.message);
        }
    }
}

const ticket = new Ticket();
module.exports = ticket;