
const getHomeView = async (req, res) => {
  res.render('home', { title: 'Title' });
};

module.exports = getHomeView;
