const Sequelize = require('sequelize');
const database = require('../config/db');

const Produto = database.define('Produto', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    cor: {
        type: Sequelize.STRING, 
        allowNull: false
    }
    
    
});

module.exports = Produto;