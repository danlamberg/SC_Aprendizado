const Sequelize = require('sequelize');
const sequelize = new Sequelize('gestao','root','minhasenha', {
    dialect: 'mysql',
    host: 'localhost',
    port: '3306'
}); 

module.exports = sequelize;