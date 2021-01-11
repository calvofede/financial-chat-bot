const app = require('./app');
const http = require('http');

app.set('port', 3001);
const server = http.createServer(app);

server.listen(3001);