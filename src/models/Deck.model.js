// models/Deck.model.js
module.exports = (sequelize, DataTypes) => {
  const Deck = sequelize.define(
    "Deck",
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cards: {
        type: DataTypes.JSONB, // Armazena um array de cartas e quantidades
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "decks",
    }
  );

  // Associações com os models User e Card
  Deck.associate = function (models) {
    Deck.belongsTo(models.User, { foreignKey: "userId" });
    Deck.belongsToMany(models.Card, { through: "DeckCards" }); // Relacionamento com Cards
  };

  return Deck;
};
