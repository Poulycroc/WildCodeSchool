const http = require('http');
const consola = require('consola');

const server = http.createServer((request, response) => {
  response.writeHead(200);
  response.end('Hello World');
});

const port = 4444

server.listen(port);
console.log(`Server address: http://localhost:${port}`);
consola.success('Built!')
consola.info('Reporter: Some info')
consola.success({
  message: 'c\'est nul',
  badge: true
})
