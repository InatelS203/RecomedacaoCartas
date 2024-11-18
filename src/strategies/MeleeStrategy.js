const { calculateDeckMetadata } = require("../utils/calculateDeckMetadata");

class MeleeStrategy {
  static async build(Card) {
    const cards = await Card.findAll({ where: { type: "corpo" } });

    if (cards.length === 0) {
      return {
        error: true,
        message: `Nenhuma carta encontrada para o tipo combate corpo a corpo`,
      };
    }

    return calculateDeckMetadata(cards);
  }
}

module.exports = { MeleeStrategy };
