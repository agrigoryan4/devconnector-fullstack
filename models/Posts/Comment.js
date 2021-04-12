const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../Database');
const User = require('../User');
const Post = require('./Post');

class Comment extends Model {}

Comment.init({
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT(510),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Comments',
  timestamps: false
});

Comment.belongsTo(Post, { foreignKey: 'postId', targetKey: 'postId' });
Comment.belongsTo(User, { foreignKey: 'authorId', targetKey: 'id' });

module.exports = Comment;
