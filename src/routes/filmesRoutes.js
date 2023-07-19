const Controller = require("../Controllers/filmesController.js")
const express = require("express");

 const router = express.Router();

 router
    .get("/filmes", Controller.ListarFilmes)
    .post("/filmes", Controller.cadastrarFilme)
    .get('/filmes/:id', Controller.ListarPorid)
    .put('/filmes/:id', Controller.AtualizarFilme)
    .delete('/filmes/:id', Controller.DeletarFilme)

 module.exports = router