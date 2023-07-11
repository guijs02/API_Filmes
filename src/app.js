const db = require("./config/dbConnect.js");
const express = require("express");
const filmes = require("./models/Filme.js");
const routes = require('./routes/index.js');

const port = 2002;

db.on("error", console.log.bind(console, "erro de conexão"));
db.once("open", () => {
  console.log("deu bom a conexão");
});
const server = express();

server.use(express.json());

routes(server)

server.get("/filmes/:id", (req, res) => {
  const id = getById(req.params.id);
  filmes.updateOne()
  res.json(filmes[id]);
});

// server.put("/filmes/:id", (req, res) => {
//   const id = getById(req.params.id);
//   const { nome,data_lancamento } = req.body;
//   filmes.up

//   filmes[id].nome = nome;
//   res.json(nome);
// });
server.delete("/filmes/:id", (req, res) => {
  const id = getById(req.params.id);
  filmes.splice(id, 1);
  res.json({ message: "deletado com sucesso" });
});

function getById(id) {
  return filmes.findById((f) => f.id == id);
}

server.listen(port);
