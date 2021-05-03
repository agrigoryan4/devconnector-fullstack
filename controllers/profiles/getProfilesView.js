const getProfiles = require('./getProfiles');

const getProfilesView = async (req, res) => {
  const profiles = await getProfiles();
  //
  res.render('profiles/profiles', { title: 'Developers', profiles });
};

module.exports = getProfilesView;
