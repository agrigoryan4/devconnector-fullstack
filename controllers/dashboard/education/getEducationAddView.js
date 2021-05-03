
const getEducationAddView = (req, res) => {
  res.render('dashboard/addEducation/addEducation', { title: 'Add Education' });
};

module.exports = getEducationAddView;
