
const getRegisterView = (req, res) => {
  res.render('account/register/register', { title: 'Register', toBeVerified: false, validationError: false });
};

module.exports = getRegisterView;
