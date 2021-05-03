require('dotenv').config();
// express
const express = require('express');
const session = require('express-session');
// utils
const morgan = require('morgan');
const path = require('path');
const cookieParser = require('cookie-parser');
// db
const { connect } = require('./models/Database');
const User = require('./models/User');
// routes
const { homeRouter, confirmEmailRouter, accountRouter, dashboardRouter, profilesRouter, postsRouter } = require('./routes');

// constants
const { SERVER_HOST = 'localhost', SERVER_PORT = 3000 } = process.env;
const { SESS_NAME = 'sid',
SESS_SECRET = 'ssh!quiet,it\'sasecret!',
SESS_LIFETIME = 1000*60*60 } = process.env;

// app
const app = express();

// middleware
app.use(morgan('dev'));
app.use(express.static('public', { redirect: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({
  name: SESS_NAME,
  secret: SESS_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: parseInt(SESS_LIFETIME),
    sameSite: true
    // secure: true
  }
}));

// view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// routes
app.use('/confirmemail', confirmEmailRouter);
app.use('/account', accountRouter);
app.use('/dashboard', dashboardRouter);
app.use('/posts', postsRouter);
app.use('/profiles', profilesRouter);
app.use('/', homeRouter);

const start = async () => {
  try {
    await connect();
    console.log('Connection to database has been established successfully.');
  } catch(err) {
    throw new Error(err);
  }
  app.listen(SERVER_PORT, SERVER_HOST, () => {
    console.log(`Server listening on port: ${SERVER_PORT}`);
  });
};

start();
