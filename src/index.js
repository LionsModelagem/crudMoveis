const express = require('express');
const loja_controller = require('./controllers/loja.js');
const gerente_controller = require('./controllers/gerente.js');
const endereco_loja_controller = require('./controllers/endereco_loja.js');
const app = express();
const port = 3000;

app.use(express.json());