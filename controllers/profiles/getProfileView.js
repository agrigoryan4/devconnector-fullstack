const Profile = require('../../models/Profiles/Profile');

const getProfileView = async (req, res) => {
  const { profileId } = req.body;
  const profiles = await Profile.findAll();
  res.render('profiles/profile/profile', { title: 'Profile' });
};

module.exports = getProfileView;
