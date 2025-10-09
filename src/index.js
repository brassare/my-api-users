const http = require('http')

const routes = require('./mocks/routes')
const { url } = require('url')

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`htttp://localhost:3000${request.url}`)
  console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`)

  const route = routes.find((routeObj) => (
    routeObj.endpoint === parsedUrl.pathname && routeObj.method === request.method
  ));

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams)
    route.handler(request, response)
  } else {
    response.writeHead(404, { 'content-type': 'text/html' })
    response.end(`Cannot $${request.method} ${parsedUrl.pathname}`)
  }

})
server.listen(3000, () => console.log('Server Starder'))