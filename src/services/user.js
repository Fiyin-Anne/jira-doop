const db = require('../../src/db/models');
const mailer = require('../helpers/mailer');
const authenticator = require('../helpers/authenticator');
const VERIFY_BASE_URL = process.env.VERIFY_BASE_URL || `http://127.0.0.1:3000/api/users/verify/`;

class User {
    constructor() {}

    createUser = async (data) => {
        try {
            if(data.constructor.name !== "Object") throw new Error("Payload must be of object type.");

            let user = await db.User.findOne({ where: {
                email: data.email
            }})
    
            if(user) throw new Error("Account already exists for this user.");
    
            // check team
            let team = await db.Team.findOne({ where: { id: data.teamId }});
            if(!team) throw new Error("Team not found.");
    
            let new_entry = await db.User.create(data);
            new_entry.team = team.name;

            mailer({id: new_entry.id, email: new_entry.email});

            return new_entry;

        } catch (err) {
            throw new Error(err.message)
        }
        
    }

    login = async (data) => {
        try {
            if(data.constructor.name !== "Object") throw new Error("Payload must be of object type.");

            // check for existing user
            let user = await db.User.findOne({ where: {
                email: data.email
            }})
    
            if(!user) throw new Error("This user does not exist.");

            let new_token = authenticator.sign({id: user.id, email: user.email});
            let token_entry = await db.Auth.findOne({ where: {id: user.id}});

            if(!token_entry) {
                token_entry = await db.Auth.create({userId: user.id, token: new_token})
            } else {
                token_entry = await db.Auth.update({ token: new_token}, { where: {userId: data.user} })
            }

            return {verify_url: `${VERIFY_BASE_URL}?token=${token_entry.token}`};

        } catch (err) {
            throw new Error(err.message)
        }
        
    }

    verify = async (data) => {
        try {
            if(data.constructor.name !== "Object") throw new Error("Payload must be of object type.");

            let valid_token = authenticator.decode({token: data.token});

            let user = await db.User.findOne({ where: {
                email: valid_token.email
            }})
    
            if(!user) throw new Error("This account does not exist.");

            return user;

        } catch (err) {
            throw new Error(err.message)
        }
        
    }
}

const user = new User();
module.exports = user;