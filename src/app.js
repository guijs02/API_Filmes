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

server.listen(port);
