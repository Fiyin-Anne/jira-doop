const jwt = require('jsonwebtoken');

module.exports = {
    sign: (data) => {
        return jwt.sign(data, process.env.TOKEN_SECRET, { expiresIn: '1d' });
    },

    decode: (data) => {
        return jwt.verify(data.token, process.env.TOKEN_SECRET);
    }
}