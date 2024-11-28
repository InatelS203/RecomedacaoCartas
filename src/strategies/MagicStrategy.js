const DBAdapter = require("../adapters/DBAdapter");
const { calculateDeckMetadata } = require("../utils/calculateDeckMetadata");

class MagicStrategy {
  static async build(Card) {
    const cards = await DBAdapter.findAllEntityWithType(Card, "magico")

    if (cards.length === 0) {
      return {
        error: true,
        message: `Nenhuma carta encontrada para o tipo mágico`,
      };
    }

    return calculateDeckMetadata(cards);
  }
}

module.exports = { MagicStrategy };
