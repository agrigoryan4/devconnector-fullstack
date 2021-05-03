const moment = require('moment');
const User = require('../../models/User');
const ConfirmEmail = require('../../models/ConfirmEmail');

const confirmEmail = async (req, res) => {
  const { id, email, code } = req.query;
  const msg = await ConfirmEmail.findOne({ id, email, verCode: code });
  if(!msg.dataValues.isVerified && moment.utc().isBefore(msg.dataValues.expires)) {
    try {
      msg.isVerified = true;
      await msg.save();
      const user = await User.findOne({ id });
      user.isVerified = true;
      await user.save();
      res.render('account/login/login', { options: { }, title: 'Login' });
    } catch (error) {
      res.status(404).send('error');
    }
  } 
};

module.exports = confirmEmail;
