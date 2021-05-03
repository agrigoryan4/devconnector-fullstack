const express = require('express');
// controllers
const { getProfileView, getProfilesView, getProfiles } = require('../controllers/profiles');


const profilesRouter = express.Router();


// profile
profilesRouter.get('/profile/', getProfileView);

// profiles
profilesRouter.get('/developers', getProfilesView);
profilesRouter.get('/', getProfiles);


module.exports = profilesRouter;
