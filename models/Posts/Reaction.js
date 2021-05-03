const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../Database');
const User = require('../User');
const Post = require('./Post');

class Reaction extends Model {}

Reaction.init({
  postId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  reaction: {
    type: DataTypes.ENUM('like', 'dislike'),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Reactions',
  timestamps: false
});

Reaction.belongsTo(Post, { foreignKey: 'postId' });
Reaction.belongsTo(User, { foreignKey: 'authorId' });

module.exports = Reaction;
