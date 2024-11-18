const { Card } = require("../models/db");
const { MeleeStrategy } = require("../strategies/MeleeStrategy");
const { MagicStrategy } = require("../strategies/MagicStrategy");
const { RangeStrategy } = require("../strategies/RangeStrategy");

module.exports = {
  renderDeckPage: (_, res) => {
    res.render("deckForm");
  },

  generateDeck: async (req, res) => {
    try {
      const { type } = req.body;

      let result = null;

      if (type === "distancia") {
        result = await RangeStrategy.build(Card);
      } else if (type === "corpo") {
        result = await MeleeStrategy.build(Card);
      } else if (type === "magico") {
        result = await MagicStrategy.build(Card);
      } else {
        return res.status(400).json({ message: "Tipo de carta inválido" });
      }

      if (result.error || result === null) {
        return res.status(404).json({ message: result.message });
      }
      return res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};
