const express = require('express');
const router = express.Router();

const { getDecks, createDeck  } = require('./controllers/deck.controller');

router.get('/test', getDecks);
router.post('/createDeck', createDeck);

module.exports = router;
