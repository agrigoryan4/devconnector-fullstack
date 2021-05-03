
const getDashboardView = (req, res) => {
  res.render('dashboard/dashboard', { title: 'Dashboard' });
};

module.exports = getDashboardView;
