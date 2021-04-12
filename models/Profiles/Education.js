const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('../Database');
const Profile = require('./Profile');

class Education extends Model {}

Education.init({
  profileId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  schoolOrBootcamp: {
    type: DataTypes.STRING,
    allowNull: false
  },
  degreeOrCertificate: {
    type: DataTypes.STRING,
    allowNull: false
  },
  field: {
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
  currentSchool: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  programDescription: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  sequelize,
  modelName: 'Educations',
  timestamps: false
})

Education.belongsTo(Profile, { foreignKey: 'profileId', targetKey: 'profileId' });

module.exports = Education;
