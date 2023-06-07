const Sequelize = require('sequelize');
const database = require('../config/db');

const Documento = database.define('Documento', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    tipo: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    data: {
        type: Sequelize.DATE, 
        allowNull: false
    }
});

module.exports = Documento;