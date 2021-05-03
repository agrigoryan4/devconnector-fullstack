const express = require('express');
// middleware
const { alreadyAuthorized } = require('../middleware'); 
// controllers
const { getLoginView, login } = require('../controllers/account/login');
const { getRegisterView, register } = require('../controllers/account/register');
const { getRecoveryView, recovery } = require('../controllers/account/recovery');


const accountRouter = express.Router();

// login
accountRouter.get('/login', alreadyAuthorized, getLoginView);
accountRouter.post('/login', alreadyAuthorized, login);

// register
accountRouter.get('/register', alreadyAuthorized, getRegisterView);
accountRouter.post('/register', alreadyAuthorized, register);

// recovery
accountRouter.get('/recovery', alreadyAuthorized, getRecoveryView);
accountRouter.post('/recovery', alreadyAuthorized, recovery);

module.exports = accountRouter;
