
const getPostsView = (req, res) => {
  res.render('posts/posts', { title: 'Posts' });
};

module.exports = getPostsView;
