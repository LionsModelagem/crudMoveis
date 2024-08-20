const db = [];
const loja_controller = require("./loja.js"); // Corrigir de acordo com o nome correto
let nextId = 1;

const model = (financeiro, id = nextId++) => {
  if (
    financeiro.nome != undefined &&
    financeiro.nome != "" &&
    financeiro.entrada != undefined &&
    financeiro.entrada != "" &&
    financeiro.saida != undefined &&
    financeiro.saida != "" &&
    loja_controller.show(financeiro.loja_id)
  ) {
    return {
      id,
      nome: financeiro.nome,
      entrada: financeiro.entrada,
      saida: financeiro.saida,
      id_loja: financeiro.loja_id,
    };
  }
};

const store = (body) => {
  const novo = model(body);

  if (novo) {
    db.push(novo);
    return 201;
  }

  return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
  const index = db.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));

  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }

  return 400;
};

const destroy = (id) => {
  const index = db.findIndex((el) => el.id == id);

  if (index != -1) {
    db.splice(index, 1);
  }
};

module.exports = {
  destroy,
  store,
  show,
  index,
  update,
};
