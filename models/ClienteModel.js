
const Sequelize = require('sequelize');
const database = require('../config/db');

const Cliente = database.define('Cliente', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    cpf: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    email: {
        type: Sequelize.STRING, 
        allowNull: false
    }
});

module.exports = Cliente;