const http = require("http");
const routes = require('./routes')
const port = process.env.PORT || 4444;

console.log('coucou')

http.createServer(routes).listen(port);
