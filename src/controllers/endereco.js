lojas_controllers = require('./loja.js');
const db = [];
let nextId = 1;

const model = (endereco, id = nextId++) => {
    if (endereco.bairro != undefined && endereco.bairro != '' &&
        endereco.rua != undefined && endereco.rua != '' &&
        endereco.numero > 0 && endereco.numero != '' &&
        endereco.loja_id != undefined && lojas_controllers.show(endereco.loja_id)) {
        return {
            id,
            bairro: endereco.bairro,
            rua: endereco.rua,
            numero: endereco.numero,
            loja: endereco.loja_id
        };
    }
};

const store = body => {
    const novo = model(body);

    if (novo) {
        db.push(novo);
        return 201;
    }

    return 400;
};

const index = () => db;

const show = id => db.find(el => el.id == id);

const update = (id, body) => {
    const index = db.findIndex(el => el.id == id);
    const novo = model(body, parseInt(id));

    if (novo && index != -1) {
        db[index] = novo;
        return 201;
    }

    return 400;
};

const destroy = id => {
    const index = db.findIndex(el => el.id == id);

    if (index != -1) {
        db.splice(index, 1);
    }
};

module.exports = {
    store,
    index,
    show,
    update,
    destroy
};