const mongoose = require("mongoose");


const schema = new mongoose.Schema({
  nome: { type: String, required: true },
  data_lancamento: { type: String, required: true },
});

const filmes = mongoose.model('movie',schema)

module.exports = filmes