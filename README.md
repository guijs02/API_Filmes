## Sobre a API de Filmes
Este projeto realizado é uma API com o tema de filmes sendo possível realizar todas as operações de um cadastro.<br>
Os verbos GET e POST devolvem dados como identificação do filme, nome e data de lançamento.<br>
O restante devolve uma mensagem positiva ou negativa para o usuário.

## 📡 Tecnologias
- Node.js
- MongoDb Atlas,
- Mongoose e Express.
<br>
A API possui os seguintes endpoints:

<h2>Obter o filme pelo id </h2>

GET -> /filmes/{id}

```json
{
  "_id": "64a8ad8362a501393519787d",
  "nome": "Bad Boys 2",
  "data_lancamento": "15/05/2020",
  "__v": 0
}
```
<h2>Obter todos os filmes </h2>

GET -> /filmes 

```json
[
  {
    "_id": "64a74c98d380d3a50d42b514",
    "nome": "Norbit",
    "data_lancamento": "15/05/2002",
    "__v": 0
  },
  {
    "_id": "64a81f313079a8c7375f85da",
    "nome": "Norbit 2",
    "data_lancamento": "15/05/2002",
    "__v": 0
  },
  {
    "_id": "64a8ad49cdf883e7700d8950",
    "nome": "Bad Boys",
    "data_lancamento": "15/05/2015",
    "__v": 0
  }
]
```

<h2>Criar novos filmes </h2>

POST -> /filmes

JsonContent
```json
{
  "nome": "Paternidade",
  "data_lancamento": "15/05/2021",
  "_id": "64b7f91a3464c7f03606b787",
  "__v": 0
}
```
Response
```json
{
  "nome": "Paternidade",
  "data_lancamento": "15/05/2021",
  "_id": "64b7f91a3464c7f03606b787",
  "__v": 0
}
```
<h2>Alterar o filme de acordo com o id</h2>

PUT -> /filmes/{id}

JsonContent
```json
{
  "nome": "vovó zona",
  "data_lancamento":"09/08/2014"
}
```
Response

```json
{
  "message": "Filme atualizado"
}
```

<h2>Deletar filme</h2>

DELETE -> /filmes/{id}

```json
{
  "message": "Filme deletado"
}
```




