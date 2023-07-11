const express = require("express");
const filmes = require("./filmesRoutes.js")

const routes = (app) => {
    
    app.get('/',(req,res) => {
        res.status(200).json().send({titulo: "Filmes"})
    })
    app.use(
        express.json(),
        filmes
    )
}
module.exports = routes