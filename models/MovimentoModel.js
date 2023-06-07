const Sequelize = require('sequelize');
const database = require('../config/db');
const Produto = require('./ProdutoModel');
const Cliente = require('./ClienteModel');
const Deposito = require('./DepositoModel');
const Documento = require('./DocumentoModel');

const Movimento = database.define('Movimento', {
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


/* Movimento.hasOne(Cliente);
Movimento.hasOne(Deposito);
Movimento.hasOne(Documento);

Movimento.hasMany(Produto, {
    foreignKey: {
      allowNull: false,
      name: 'movimentoId'
    }
  });

  */
module.exports = Movimento;