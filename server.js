require('dotenv').config();
const app = require('./app');
const http = require('http');

app.set('port', process.env.PORT);
const server = http.createServer(app);

server.listen(process.env.PORT);