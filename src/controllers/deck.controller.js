const { Deck } = require("../models/index");

module.exports = {
    
  getDecks: async (req, res) => {
    try {
      console.log(Deck);
      const decks = await Deck.findAll();
      res.json(decks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  createDeck: async (req, res) => {
    try {
      const deck = await Deck.create({
        cards: req.body.cards,
        userId: req.body.userId,
      });
      res.status(201).json(deck);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },
};
