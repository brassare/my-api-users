const UserController = require("../controller/UserController");

module.exports = [
  {
    endpoint: '/users',
    method: 'GET',
    handler: UserController.listUsers
  },
  {
    endpoint: '/users',
    method: 'POST'
  },
  {
    endpoint: '/users/:id',
    method: 'GET',
    handler: UserController.getUserByID
  }
]