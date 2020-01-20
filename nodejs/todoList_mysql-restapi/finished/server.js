const http = require("http");
const app = require('./app');
const port = process.env.PORT || 4444;

http.createServer(app).listen(port);
