
const getLoginView = (req, res) => {
  res.render('account/login/login', { title: 'Login', options: { } });
};

module.exports = getLoginView;
