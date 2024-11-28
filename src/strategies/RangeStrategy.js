const DBAdapter = require("../adapters/DBAdapter");
const { calculateDeckMetadata } = require("../utils/calculateDeckMetadata");

class RangeStrategy {
  static async build(Card) {
    const cards = await DBAdapter.findAllEntityWithType(Card, "distancia")

    if (cards.length === 0) {
      return {
        error: true,
        message: `Nenhuma carta encontrada para o tipo combate a distância`,
      };
    }

    return calculateDeckMetadata(cards);
  }
}

module.exports = { RangeStrategy };
