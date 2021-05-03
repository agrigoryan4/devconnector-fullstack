
const getExperienceAddView = (req, res) => {
  res.render('dashboard/addExperience/addExperience', { title: 'Add Experience' });
};

module.exports = getExperienceAddView;
