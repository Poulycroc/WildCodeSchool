const http = require('http')
const contries = require('./api/contries')

const server = http.createServer((request, response) => {
  if (request.url !== '/') {
    contries.name(request.url, function(data) {
      console.log({ data })
      response.end(JSON.stringify(data))
    })
  } else {
    response.writeHead(200)
    response.end('Il n\'y a rien a voir ici')
  }
})

const port = 4444

server.listen(port)
console.log(`Server address: http://localhost:${port}`)
