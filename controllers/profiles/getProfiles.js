const Profile = require('../../models/Profiles/Profile');

const getProfiles = async (req, res, next) => {
  // const { profileId } = req.body;
  const profiles = await Profile.findAll();
  return profiles;
};

module.exports = getProfiles;
