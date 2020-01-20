const url = require('url')
const routes = require('./routes')

const handleRequest = function(request, response) {
    response.writeHead(200, { 'Content-Type': 'tesxt/json' });

    const path = url.parse(request.url).pathname
    console.log({ path })
}

module.exports = {
    handleRequest
}