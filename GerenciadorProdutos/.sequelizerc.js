const path = require('path');

module.exports = {
  'config': path.resolve('./src/Config/DataBase.js'),
  'models-path': path.resolve('./src/Models'),
  'seeders-path': path.resolve('./src/seeders'),
  'migrations-path': path.resolve('./src/migrations')
};
