// models/User.model.js
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );

  // Associação com o model Deck
  User.associate = function (models) {
    User.hasMany(models.Deck, { foreignKey: "userId" });
  };

  return User;
};
