const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../Database');
const Profile = require('./Profile');

class SocialLink extends Model {}

SocialLink.init({
  profileId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  mediaName: {
    type: DataTypes.ENUM('twitter', 'facebook', 'youtube', 'linkedin', 'instagram'),
    allowNull: false
  },
  link: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'SocialLinks',
  timestamps: false
})

SocialLink.belongsTo(Profile, { foreignKey: 'profileId', targetKey: 'profileId' });

module.exports = SocialLink;
