// eslint-disable-next-line no-unused-vars
const mysql = require('mysql');

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'todoapp-db-lite',
    charset: 'utf8',
  },
});

const bookShelf = require('bookshelf')(knex);

const User = bookShelf.Model.extend({
  tableName: 'todos',
});

module.exports = User;
