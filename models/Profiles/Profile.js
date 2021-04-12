const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../Database');
const User = require('../User');

class Profile extends Model {}

Profile.init({
  profileId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  profStatus: {
    type: DataTypes.ENUM('Developer', 'Junior Developer', 'Senior Developer', 'Manager', 'Student or Learning', 'Instructor or Teacher', 'Intern', 'Other'),
    allowNull: true
  },
  company: {
    type: DataTypes.STRING,
    allowNull: true
  },
  website: {
    type: DataTypes.STRING,
    allowNull: true
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  githubUsername: {
    type: DataTypes.STRING,
    allowNull: true
  },
  bioShort: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Profiles',
  timestamps: false
})

Profile.belongsTo(User, { foreignKey: 'userId', targetKey: 'id' });

module.exports = Profile;
