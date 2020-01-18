const http = require('http');
const contries = require('./api/contries')

const server = http.createServer((request, response) => {
  if (request.url !== '/') {
    contries.name(request.url, function(data) {
      response.end(JSON.stringify(data))
    })
  } else {
    response.writeHead(500);
    response.end('je sais pas quoi mettre voila !!!!');
  }
});

const port = 5555
server.listen(port);
console.log('Online port: '+ port)