const express = require('express');
// middleware
const { auth } = require('../middleware'); 
// controllers
const { getPostView, getPosts, createPost, deletePost } = require('../controllers/posts/post');
const { getComments, deleteComment, putComment } = require('../controllers/posts/comments');
const { getReactions, deleteReaction, putReaction } = require('../controllers/posts/reactions');
const { getPostsView } = require('../controllers/posts');


const postsRouter = express.Router();

// post
// -- post
postsRouter.get('/post/posts', auth, getPosts);
postsRouter.get('/post/', auth, getPostView);
postsRouter.post('/post/', auth, createPost);
postsRouter.delete('/post/:id', auth, deletePost);
// -- comments
postsRouter.get('/post/comment/:id', auth, getComments);
postsRouter.put('/post/comment/:id', auth, putComment);
postsRouter.delete('/post/comment/:id', auth, deleteComment);
// -- reactions
postsRouter.get('/post/reaction/:id', auth, getReactions);
postsRouter.put('/post/reaction/:id', auth, putReaction);
postsRouter.delete('/post/reaction/:id', auth, deleteReaction);

// posts
postsRouter.get('/', auth, getPostsView);


module.exports = postsRouter;
