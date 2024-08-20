const db = [];
const loja_controller = require("./loja.js"); // Corrigir de acordo com o nome correto
let nextId = 1;

const model = (estoque, id = nextId++) => {
  if (
    estoque.quantidade != undefined &&
    estoque.quantidade != "" &&
    loja_controller.show(estoque.loja_id)
  ) {
    return {
      id,
      quantidade: estoque.quantidade,
      id_loja: estoque.loja_id,
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
