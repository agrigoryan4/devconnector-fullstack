const express = require('express');
// controllers
const { getProfileView, getProfiles } = require('../controllers/dashboard/profile');


const profilesRouter = express.Router();


// profile
profilesRouter.get('/profile/:id', getProfileView);

// profiles
profilesRouter.get('/', getProfiles);


module.exports = profilesRouter;
