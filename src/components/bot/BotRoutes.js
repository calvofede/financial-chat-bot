const express = require('express');
const router = express.Router();
const BotController = require('./BotController');

router.get('/command', BotController.getCommand);

module.exports = router