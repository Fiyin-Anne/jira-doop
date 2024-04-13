const user = require('../controllers/user');
const express = require('express');
const router = express.Router();
const JRDRouter = require('../helpers/jrdrouter');
const validator = require('../middlewares/validators/index');
const {newUserSpec, loginUserSpec, invitedUserSpec, verifyUserSpec} = require('../middlewares/validators/userSchema');

const routes = [
    {
        path: "/users/register",
        middlewares: [validator(newUserSpec)],
        method: 'post',
        action: user.createUser
    },
    {
        path: "/users/invite",
        middlewares: [validator(invitedUserSpec)],
        method: 'post',
        action: user.createUser
    },
    {
        path: "/users/login",
        middlewares: [validator(loginUserSpec)],
        method: 'post',
        action: user.userLogin
    },
    {
        path: "/users/verify",
        middlewares: [validator(verifyUserSpec)],
        method: 'get',
        action: user.verifyUser
    }
]

module.exports = routes;