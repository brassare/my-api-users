const http = require('http')

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'content-type': 'text-html' })
  response.end(('<h1>Teste</h1>'))
})

server.listen(3000, () => console.log('server starter'))