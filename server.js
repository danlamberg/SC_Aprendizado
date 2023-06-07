const express = require("express");
const app = express();

require('dotenv').config();
const database = require('./config/db');
const moment = require('moment');
const Cliente = require('./models/ClienteModel.js');
const Documento = require('./models/DocumentoModel.js');
const Deposito = require('./models/DepositoModel.js');
const Movimento = require('./models/MovimentoModel.js');
const Produto = require('./models/ProdutoModel.js');

app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}!`);
});

console.log('Início');
(async () => {
    console.log('entrou');
    const database = require('./config/db');
    const Movimento = require( './models/MovimentoModel');
    const Documento = require('./models/DocumentoModel');
    try{
        const res = await database.sync({alter: true});
        console.log(res);     
    }       
    catch (error){
        console.log(error);
    }
})();
console.log('fim');