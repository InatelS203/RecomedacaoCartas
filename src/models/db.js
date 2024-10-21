const { Sequelize } = require("sequelize");

// Criação da instância do Sequelize
const sequelize = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  port: 5432,
  username: "my_user",
  password: "my_password",
  database: "my_database",
});

// Definição dos modelos
const Card = require("./Card.model")(sequelize, Sequelize.DataTypes);
const User = require("./User.model")(sequelize, Sequelize.DataTypes);
const Deck = require("./Deck.model")(sequelize, Sequelize.DataTypes);

// Definições de associações entre modelos
User.associate({ Deck });
Deck.associate({ User, Card });

const db = {
  sequelize,
  Sequelize,
  Card,
  User,
  Deck,
};

module.exports = db;
