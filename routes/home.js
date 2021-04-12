const express = require('express');
// middleware
const { alreadyAuthorized } = require('../middleware'); 
// controllers
const { getHomeView } = require('../controllers/home');

const homeRouter = express.Router();

homeRouter.get('/', alreadyAuthorized, getHomeView);

module.exports = homeRouter;
