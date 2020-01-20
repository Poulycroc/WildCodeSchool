const http = require("http");
const { handleRequest } = require('./app');
const port = process.env.PORT || 4444;

console.log('coucou')

http.createServer(handleRequest).listen(port);
