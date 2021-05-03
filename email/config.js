const nodemailer = require('nodemailer');

const { EMAIL_HOST, EMAIL_NAME, EMAIL_PORT, EMAIL_USER, EMAIL_PASS } = process.env;

const transporter = nodemailer.createTransport({
  host: EMAIL_HOST,
  name: EMAIL_NAME,
  port: EMAIL_PORT,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS
  }
});

module.exports = transporter;
