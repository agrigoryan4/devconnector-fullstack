const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../Database');
const Profile = require('./Profile');

class Experience extends Model {}

Experience.init({
  profileId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  jobTitle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  company: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: true
  },
  fromDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  toDate: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  currentJob: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  jobDescription: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Experiences',
  timestamps: false
})

Experience.belongsTo(Profile, { foreignKey: 'profileId', targetKey: 'profileId' });

module.exports = Experience;
