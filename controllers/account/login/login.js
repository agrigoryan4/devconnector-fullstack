const User = require('../../../models/User');
const bcrypt = require('bcrypt');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });
  if(!user) {
    res.render('account/login/login', { options: { invalidCredentials: true }, title: 'Invalid Credentials | Login'});
    return;
  }
  if(!user.dataValues.isVerified) {
    res.render('account/login/login', { options: { toBeVerified: true }, title: 'Login'});
    return;
  }
  const isValidPassword = await bcrypt.compare(password, user.dataValues.password);
  if(isValidPassword) {
    req.session.user = user.dataValues;
    res.redirect('/dashboard');
    return;
  } else res.redirect('/account/login');
};

module.exports = login;
