const express = require('express');
// middleware
const { auth } = require('../middleware'); 
// controllers
const { getProfileEditView, editProfile, deleteProfile } = require('../controllers/dashboard/profile');
const { getEducationAddView, addEducation, deleteEducation } = require('../controllers/dashboard/education');
const { getExperienceAddView, addExperience, deleteExperience } = require('../controllers/dashboard/experience');
const { getDashboardView } = require('../controllers/dashboard');

const dashboardRouter = express.Router();

// profile
dashboardRouter.get('/profile/edit', auth, getProfileEditView);
dashboardRouter.post('/profile/edit', auth, editProfile);
dashboardRouter.delete('/profile/delete', deleteProfile);

// education
dashboardRouter.get('/education/add', auth, getEducationAddView);
dashboardRouter.post('/education/add', auth, addEducation);
dashboardRouter.delete('/education/delete', auth, deleteEducation);

// experience
dashboardRouter.get('/experience/add', auth, getExperienceAddView);
dashboardRouter.post('/experience/add', auth, addExperience);
dashboardRouter.delete('/experience/delete', auth, deleteExperience);

// dashboard
dashboardRouter.get('/', auth, getDashboardView);

module.exports = dashboardRouter;
