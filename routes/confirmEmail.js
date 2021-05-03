const express = require('express');
// controllers
const { confirmEmail } = require('../controllers/confirmEmail');

const confirmEmailRouter = express.Router();

// confirmEmail
confirmEmailRouter.get('/', confirmEmail);

module.exports = confirmEmailRouter;
