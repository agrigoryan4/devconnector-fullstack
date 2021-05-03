const { Sequelize, DataTypes, Model } = require('sequelize');
const { sequelize } = require('./Database');
const User = require('./User');

class ConfirmEmail extends Model {}

ConfirmEmail.init({
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  verCode: {
    type: DataTypes.STRING,
    allowNull: false
  },
  expires: {
    type: DataTypes.DATE,
    allowNull: false
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'ConfirmEmails',
  timestamps: false
});

ConfirmEmail.belongsTo(User, { foreignKey: 'userId' });

module.exports = ConfirmEmail;
