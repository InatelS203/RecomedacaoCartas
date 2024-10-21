const express = require('express');
const router = express.Router();

const { getDecks, createDeck, renderDeckPage, generateDeck } = require('./controllers/deck.controller');

router.get('/test', getDecks);
router.post('/createDeck', createDeck);

router.get('/deckForm', renderDeckPage);
router.post('/generateDeck', generateDeck);

module.exports = router;
