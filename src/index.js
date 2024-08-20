
const express = require("express")
const fornecedor_controller = require("./controller/fornecedor.js")
const dono_controller = require("./controller/dono.js")
const cliente_controller = require("./controller/cliente.js")
const loja_controller = require('./controllers/loja.js');
const gerente_controller = require('./controllers/gerente.js');
const endereco_loja_controller = require('./controllers/endereco_loja.js');
const app = express()
const port = 3000

app.use(express.json())

app.post("/dono", (req, res) => {
    const dono = req.body
    const code = dono_controller.store(dono)
    res.status(code).json()
})

app.get("/dono", (req, res) => {
    const donos = dono_controller.index()
    res.json(donos)
})

app.get("/dono/:id", (req, res) => {
    const dono = dono_controller.show(req.params.id)
    res.json(dono)
})

app.put("/dono/:id", (req, res) => {
    const dono = req.body
    const code = dono_controller.update(req.params.id, dono)
    res.status(code).json()
})

app.delete("/dono/:id", (req, res) => {
    dono_controller.destroy(req.params.id)
    res.json()
})

app.listen(port, () => {
    console.log("servidor rodando")
})

//fornecedor

app.post("/fornecedor", (req, res) => {
    const fornecedor = req.body
    const code = fornecedor_controller.store(fornecedor)
    res.status(code)
})

app.get("/fornecedor", (req, res) => {
    const fornecedor = fornecedor_controller.index()
    res.json(fornecedor)
})

app.get("/fornecedor/:id", (req, res)=> {
    const fornecedor = fornecedor_controller.update(req.params.id, fornecedor)
    res.json(fornecedor)
})

app.put("/fornecedor/:id", (req, res) => {
    const fornecedor = req.body
    const code = fornecedor_controller.update(req.params.id, fornecedor)
})

app.delete("fornecedor/:id", (req, res) => {
    fornecedor_controller.destroy(req.params.id)
    res.json()
})

//cliente

app.post("/clientes", (req, res) => {
    const cliente = req.body
    const code = cliente_controller.store(cliente)
    res.status(code)
})

app.get("/clientes", (req, res) => {
    const cliente = cliente_controller.index()
    res.json(cliente)
})

app.get("/clientes/:id", (req, res)=> {
    const cliente = cliente_controller.update(req.params.id, cliente)
    res.json(cliente)
})

app.put("/clientes/:id", (req, res) => {
    const cliente = req.body
    const code = cliente_controller.update(req.params.id, cliente)
})

app.delete("cliente/:id", (req, res) => {
    cliente_controller.destroy(req.params.id)
    res.json()
})
