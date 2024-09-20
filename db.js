const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "adm",
  password: "adm",
  database: "postgres",
});

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
