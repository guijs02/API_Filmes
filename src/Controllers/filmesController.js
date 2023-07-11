const filmes = require("../models/Filme.js");

class FilmeController {
  static ListarFilmes = async (req, res) => {
    try {
      const movies = await filmes.find();
      res.json(movies);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  static cadastrarFilme = (req,res) => {
    let filme = new filmes(req.body)
    filme.save((err) => {

      if(err){
        res.status(500).send({message: `${err.message} - falha ao cadastrar o filme`})
      }else{
        res.status(201).send(filme.toJSON())
      }
    })
  }
  static ListarPorid = (req,res) => {
    try{

      let {id} = req.params
      const filme = filmes.findById(id)
      res.json(filme)
    }catch(err){
      res.status(404).json({message: `${err.message}`})
    }
  }

  static AtualizarFilme = (req,res) => {
    try{

      let {id} = req.params
      const filme = filmes.findByIdAndUpdate(id, {$set: req.body})
      res.status(200).send({message: 'Filme atualizado'})
    }catch(err){
      res.status(404).json({message: `${err.message}`})
    }
  }
}

module.exports = FilmeController;
