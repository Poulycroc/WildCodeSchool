const http = require('http')
const app = require('./app')
require('dotenv').config()

const server = http.createServer(app)

server.listen(process.env.APP_PORT, (err) => {
  if (err) throw new Error('mmh :/')
  console.log(`server listening on localhost:${process.env.APP_PORT}`)
})