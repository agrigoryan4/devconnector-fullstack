
const getPostView = (req, res) => {
  res.render('posts/post/post', { title: 'Post' });
};

module.exports = getPostView;
