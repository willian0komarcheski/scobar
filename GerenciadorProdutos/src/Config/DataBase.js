// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('GerenciadorProdutos', 'devuser', 'dev@123', {
  host: '127.0.0.1',
  dialect: 'mysql',
});

module.exports = sequelize;
