const { Sequelize } = require('sequelize');

const { DB_DATABASE = 'devconnector', DB_USERNAME = 'root', DB_PASSWORD = '', DB_HOST = 'localhost', DB_PORT = 3306 } = process.env;

const sequelize = new Sequelize(DB_DATABASE, DB_USERNAME, DB_PASSWORD, {
  dialect: 'mysql',
  host: DB_HOST,
  port: DB_PORT
})

const connect = async () => {
  try {
    await sequelize.authenticate();
    // await sequelize.sync({ force: true });
    console.log('Database synced.')
  } catch(err) {
    throw new Error(err);
  }
};

module.exports.sequelize = sequelize;
module.exports.connect = connect;
