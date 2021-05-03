const { SESS_NAME } = process.env;

const alreadyAuthorized = (req, res, next) => {
  if(req.session.user && req.cookies[SESS_NAME]) {
    res.redirect('/dashboard');
  } else next();
}

module.exports = alreadyAuthorized;
