const getPosts = require('../controllers/posts');
const createUsers = require('../controllers/createUser');
const login = require('../controllers/login');
const getUsers = require('../controllers/getUsers');

module.exports = {
  getPosts,
  createUsers,
  getUsers,
  login,
};
