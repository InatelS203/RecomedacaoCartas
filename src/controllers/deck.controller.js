const db = require("../models/db");
const { Deck, Card } = require("../models/db");

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

  renderDeckPage: (req, res) => {
    res.render("deckForm");
  },

  generateDeck: async (req, res) => {
    try {
      const { type } = req.body;

      // Consulta ao banco para buscar as cartas pelo tipo informado
      const cards = await Card.findAll({ where: { type } });

      // Verifica se encontrou cartas
      if (cards.length === 0) {
        return res
          .status(404)
          .json({ message: `Nenhuma carta encontrada para o tipo ${type}` });
      }

      // Cálculo do custo médio, velocidade média e a carta com maior ataque
      const avgCost =
        cards.reduce((sum, card) => sum + card.cost, 0) / cards.length;
      const avgSpeed =
        cards.reduce((sum, card) => sum + card.speed, 0) / cards.length;
      const maxAttackCard = cards.reduce(
        (max, card) => (card.attack > max.attack ? card : max),
        cards[0]
      );

      // Retorna os resultados
      res.json({
        avg_cost: avgCost,
        avg_speed: avgSpeed,
        max_attack: maxAttackCard,
        cards,
      });
    } catch (error) {
      // Lida com erros
      res.status(500).json({ error: error.message });
    }
  },
};
