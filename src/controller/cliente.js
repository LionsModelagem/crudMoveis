const db = []
const loja_controller = require("./loja.js")
let proximoID = 1

const model = (cliente, id = proximoID++) => {
    if (cliente.nome != undefined && cliente.nome != "" && cliente.numero != "" && cliente.numero != undefined && cliente.loja_id != undefined && loja_controller.show(cliente.loja_id)){
        return {
            id,
            nome: cliente.nome,
            numero: cliente.numero,
            loja_id: cliente.loja_id
        }
    }
}

const store = body => {
    const novo = model(body)
    if(novo){
        db.push(novo)
        return 200
    } 
    return 400
}

const index = () => {
    return db
}

const show = id => db.find(el => el.id == id)

const update = (id, body) => {
    const index = db.findIndex(el => el.id == id)
    const novo = model(body, parseInt(id))

    if (novo && index != -1){
        db[index] = novo;
        return 200
    }
    return 400
}

const destroy = id => {
    const index = db.findIndex(el => el.id == id)
    if(index != -1){
        db.splice(index, 1)
        return 200
    }
    return 400
}

module.exports = {destroy, store, index, update, show}



