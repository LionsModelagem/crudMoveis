
const express = require("express");
const fornecedor_controller = require("./controllers/fornecedor.js");
const dono_controller = require("./controllers/dono.js");
const cliente_controller = require("./controllers/cliente.js");
const loja_controller = require('./controllers/loja.js');
const gerente_controller = require('./controllers/gerente.js');
const endereco_loja_controller = require('./controllers/endereco_loja.js');
const financeiro_controller = require('./controllers/financeiro.js')
const produto_controller = require('./controllers/produto.js')
const estoque_controller = require('./controllers/estoque.js')
const app = express();
const port = 3000;

app.use(express.json());

// GERENCIAMENTO DONO //

app.post("/dono", (req, res) => {
    const dono = req.body
    const code = dono_controller.store(dono)
    res.status(code).json()
});

app.get("/dono", (req, res) => {
    const donos = dono_controller.index()
    res.json(donos)
});

app.get("/dono/:id", (req, res) => {
    const dono = dono_controller.show(req.params.id)
    res.json(dono)
});

app.put("/dono/:id", (req, res) => {
    const dono = req.body
    const code = dono_controller.update(req.params.id, dono)
    res.status(code).json()
});

app.delete("/dono/:id", (req, res) => {
    dono_controller.destroy(req.params.id)
    res.json()
});

// GERENCIAMENTO FORNECEODR //

app.post("/fornecedor", (req, res) => {
    const fornecedor = req.body
    const code = fornecedor_controller.store(fornecedor)
    res.status(code)
});

app.get("/fornecedor", (req, res) => {
    const fornecedor = fornecedor_controller.index()
    res.json(fornecedor)
});

app.get("/fornecedor/:id", (req, res) => {
    const fornecedor = fornecedor_controller.update(req.params.id, fornecedor)
    res.json(fornecedor)
});

app.put("/fornecedor/:id", (req, res) => {
    const fornecedor = req.body
    const code = fornecedor_controller.update(req.params.id, fornecedor)
});

app.delete("fornecedor/:id", (req, res) => {
    fornecedor_controller.destroy(req.params.id)
    res.json()
});

// GERENCIAMENTO CLIENTE //

app.post("/clientes", (req, res) => {
    const cliente = req.body
    const code = cliente_controller.store(cliente)
    res.status(code)
});

app.get("/clientes", (req, res) => {
    const cliente = cliente_controller.index()
    res.json(cliente)
});

app.get("/clientes/:id", (req, res) => {
    const cliente = cliente_controller.update(req.params.id, cliente)
    res.json(cliente)
});

app.put("/clientes/:id", (req, res) => {
    const cliente = req.body
    const code = cliente_controller.update(req.params.id, cliente)
});

app.delete("cliente/:id", (req, res) => {
    cliente_controller.destroy(req.params.id)
    res.json()
});

// GERENCIAMENTO LOJA //

app.post("/loja", (req, res) => {
    const loja = req.body
    const code = loja_controller.store(loja)
    res.status(code)
});

app.get("/loja", (req, res) => {
    const loja = loja_controller.index()
    res.json(loja)
});

app.get("/loja/:id", (req, res) => {
    const loja = loja_controller.update(req.params.id, loja)
    res.json(loja)
});

app.put("/loja/:id", (req, res) => {
    const loja = req.body
    const code = loja_controller.update(req.params.id, loja)
});

app.delete("loja/:id", (req, res) => {
    loja_controller.destroy(req.params.id)
    res.json()
});

// GERENCIAMENTO GERENTE //

app.post("/gerente", (req, res) => {
    const gerente = req.body
    const code = gerente_controller.store(gerente)
    res.status(code)
});

app.get("/gerente", (req, res) => {
    const gerente = gerente_controller.index()
    res.json(gerente)
});

app.get("/gerente/:id", (req, res) => {
    const gerente = gerente_controller.update(req.params.id, gerente)
    res.json(gerente)
});

app.put("/gerente/:id", (req, res) => {
    const gerente = req.body
    const code = gerente_controller.update(req.params.id, gerente)
});

app.delete("gerente/:id", (req, res) => {
    gerente_controller.destroy(req.params.id)
    res.json()
});

// GERENCIAMENTO ENDEREÇO_LOJA //

app.post("/endereco", (req, res) => {
    const endereco = req.body
    const code = endereco_loja_controller.store(endereco)
    res.status(code)
});

app.get("/endereco", (req, res) => {
    const endereco = endereco_loja_controller.index()
    res.json(endereco)
});

app.get("/endereco/:id", (req, res) => {
    const endereco = endereco_loja_controller.update(req.params.id, endereco)
    res.json(endereco)
});

app.put("/endereco/:id", (req, res) => {
    const endereco = req.body
    const code = endereco_loja_controller.update(req.params.id, endereco)
});

app.delete("endereco/:id", (req, res) => {
    endereco_loja_controller.destroy(req.params.id)
    res.json()
});

app.listen(port, () => {
    console.log("servidor rodando")
});

// GERENCIAMENTO FINANCEIRO //

app.post("/financeiro", (req, res) => {
    const financeiro = req.body
    const code = financeiro_controller.store(financeiro)
    res.status(code)
});

app.get("/financeiro", (req, res) => {
    const financeiro = financeiro_controller.index()
    res.json(financeiro)
});

app.get("/financeiro/:id", (req, res) => {
    const financeiro = financeiro_controller.update(req.params.id, financeiro)
    res.json(financeiro)
});

app.put("/financeiro/:id", (req, res) => {
    const financeiro = req.body
    const code = financeiro_controller.update(req.params.id, financeiro)
});

app.delete("financeiro/:id", (req, res) => {
    financeiro_controller.destroy(req.params.id)
    res.json()
});

// GERENCIAMENTO PRODUTO //

app.post("/produto", (req, res) => {
    const produto = req.body
    const code = produto_controller.store(produto)
    res.status(code)
});

app.get("/produto", (req, res) => {
    const produto = produto_controller.index()
    res.json(produto)
});

app.get("/produto/:id", (req, res) => {
    const produto = produto_controller.update(req.params.id, produto)
    res.json(produto)
});

app.put("/produto/:id", (req, res) => {
    const produto = req.body
    const code = produto_controller.update(req.params.id, produto)
});

app.delete("produto/:id", (req, res) => {
    produto_controller.destroy(req.params.id)
    res.json()
});

// GERENCIAMENTO ESTOQUE //

app.post("/estoque", (req, res) => {
    const estoque = req.body
    const code = estoque_controller.store(estoque)
    res.status(code)
});

app.get("/estoque", (req, res) => {
    const estoque = estoque_controller.index()
    res.json(estoque)
});

app.get("/estoque/:id", (req, res) => {
    const estoque = estoque_controller.update(req.params.id, estoque)
    res.json(estoque)
});

app.put("/estoque/:id", (req, res) => {
    const estoque = req.body
    const code = estoque_controller.update(req.params.id, estoque)
});

app.delete("/estoque/:id", (req, res) => {
    estoque_controller.destroy(req.params.id)
    res.json()
});