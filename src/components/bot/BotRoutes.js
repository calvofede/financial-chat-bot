const express = require('express');
const router = express.Router();
const BotController = require('./BotController');

router.get('/command/info/stock/:stock', BotController.getCommand);

module.exports = router