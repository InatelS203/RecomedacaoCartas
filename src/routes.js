const express = require("express");
const router = express.Router();

const {
  renderDeckPage,
  generateDeck,
} = require("./controllers/deck.controller");

router.get("/deckForm", renderDeckPage);
router.post("/generateDeck", generateDeck);

module.exports = router;
