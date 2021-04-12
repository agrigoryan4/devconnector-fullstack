// express
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
// utils
const morgan = require('morgan');
// db
const { connect } = require('./models/Database');
const User = require('./models/User');
// routes
const { homeRouter, confirmEmailRouter, accountRouter, dashboardRouter, profilesRouter, postsRouter } = require('./routes');

// constants
const { SERVER_PORT = 5000 } = process.env;
const { SESS_NAME = 'sid',
SESS_SECRET = 'ssh!quiet,it\'sasecret!',
SESS_LIFETIME = 1000*60*60 } = process.env;

// app
const app = express();
app.use(morgan('dev'));
app.use(session({
  name: SESS_NAME,
  secret: SESS_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: SESS_LIFETIME,
    sameSite: true,
    // secure: true 
  }
}));
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

// routes
app.use('/', homeRouter);
app.use('/confirmEmail', confirmEmailRouter);
app.use('/account', accountRouter);
app.use('/dashboard', dashboardRouter);
app.use('/posts', profilesRouter);
app.use('/profiles', postsRouter);

const start = async () => {
  try {
    await connect();
    console.log('Connection to database has been established successfully.');
  } catch(err) {
    throw new Error(err);
  }
  app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port: ${SERVER_PORT}`);
  });
};

start();
