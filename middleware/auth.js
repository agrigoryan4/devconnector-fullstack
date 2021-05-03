const { SESS_NAME } = process.env;


const auth = (req, res, next) => {
  if(req.session.user && req.cookies[SESS_NAME]) next();
  else {
    if(req.cookies[SESS_NAME]) res.clearCookie(SESS_NAME);
    res.redirect('/account/login')
  };
}

module.exports = auth;
