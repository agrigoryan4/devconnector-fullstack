const bcrypt = require('bcrypt');
const validator = require('validator');
const randomString = require('randomstring');
const moment = require('moment');
// email
const transporter = require('../../../email/config');
// models
const User = require('../../../models/User');
const ConfirmEmail = require('../../../models/ConfirmEmail');

const sendVerificationEmail = async (id, email) => {
  const sendEmail = async (id, email, code) => {
    const link = `http://${process.env.SERVER_HOST}${process.env.SERVER_PORT ? `:${process.env.SERVER_PORT}` : ''}/confirmemail/?id${id}&email=${email}&code=${code}`;
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Verify your account | Devconnector',
      text: `Welcome to DevConnector! :)\nFollow this link to verify your account!\n ${link} \nThe link is valid for 5 minutes`
    };
    try {
      await transporter.sendMail(mailOptions);
    } catch (err) {
      throw new Error(err);
    }
  };
  const verCode = randomString.generate(6);
  const expires = moment().add(5, 'minutes').format('YYYY-MM-DD HH:mm:ss');
  try {
    const ConfirmationEmail = ConfirmEmail.build({ userId: id, email, verCode, expires, isVerified: false });
    await ConfirmationEmail.save();
    await sendEmail(id, email, verCode, expires);
  } catch(err) {
    throw new Error(err);
  }
};

const register = async (req, res) => {
  const { email, password, passwordconfirmed } = req.body;
  if(password === passwordconfirmed && validator.isEmail(email)) {
    const hashedPassword = await bcrypt.hash(password, 12);
    try {
      const Account = User.build({ email, password: hashedPassword, isVerified: false });
      await Account.save();
      await sendVerificationEmail(Account.id, Account.email);
      res.render('account/register/register', { title: 'Register', toBeVerified: true, validationError: false });
    } catch (err) {
      throw new Error(err);
    }
  } else res.status(404).render('account/register/register', { title: 'Register', toBeVerified: false, validationError: true });
};

module.exports = register;
