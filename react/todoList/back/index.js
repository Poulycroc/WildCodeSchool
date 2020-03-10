const http = require('http')
const port = 7878
const app = require('./app')

const server = http.createServer(app)

server.listen(port, (err) => {
  if (err) throw new Error('mmh :/')
  console.log(`server listening on localhost:${port}`)
})