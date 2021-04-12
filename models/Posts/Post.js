const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../Database');
const User = require('../User');

class Post extends Model {}

Post.init({
  postId: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Posts',
  timestamps: false
});

Post.belongsTo(User, { foreignKey: 'authorId', targetKey: 'id' });

module.exports = Post;
