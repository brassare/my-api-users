const users = require('../mocks/users')

module.exports = {
  listUsers(request, response) {
    const { order } = request.query
    const sortedUser = users.sort((a, b) => {
      if (order === 'desc') {
        return a.id < b.id ? 1 : -1
      } else {
        return a.id > b.id ? 1 : -1
      }
    })

    response.writeHead(200, { 'content-type': 'application/json' });
    response.end(JSON.stringify(sortedUser));
  },

  getUserByID(request, response) {
    const { id } = request.params
    const user = users.find((user) => user.id === Number(id))

    if (!user) {
      response.writeHead(400, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify({ error: `User not found` }))
    } else {
      response.writeHead(200, { 'Content-Type': 'application/json' })
      response.end(JSON.stringify(user))

    }
  }
}