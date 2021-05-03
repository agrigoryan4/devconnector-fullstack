const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../Database');
const Profile = require('./Profile');

class Skill extends Model {}

Skill.init({
  profileId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  skill: {
    type: DataTypes.ENUM('html', 'css', 'javascript', 'php', 'java', 'c++', 'c#', 'python'),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Skills',
  timestamps: false
})

Skill.belongsTo(Profile, { foreignKey: 'profileId' });

module.exports = Skill;
