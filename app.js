const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const { Router: BotRoutes } = require('./src/components/bot');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(BotRoutes);

module.exports = app;
