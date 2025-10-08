const http = require('http')

const UserController = require('./controller/UserController')
const routes = require('./mocks/routes')

const server = http.createServer((request, response) => {
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`)

  const route = routes.find((routeObj) => (
    routeObj.endpoint === request.url && routeObj.method === request.method
  ));

  if (route) {
    route.handler(request, response)
  } else {
    response.writeHead(404, { 'content-type': 'text/html' })
    response.end(`Cannot $${request.method} ${request.url}`)
  }

})
server.listen(3000, () => console.log('Server Starder'))