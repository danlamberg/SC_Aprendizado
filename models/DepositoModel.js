const Sequelize = require('sequelize');
const database = require('../config/db');

const Deposito = database.define('Deposito', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    filial: {
        type: Sequelize.STRING, 
        allowNull: false
    }
});

module.exports = Deposito;