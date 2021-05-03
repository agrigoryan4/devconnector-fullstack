
const getProfileEditView = (req, res) => {
  res.render('dashboard/editProfile/editProfile', { title: 'Edit Profile' });
};

module.exports = getProfileEditView;
