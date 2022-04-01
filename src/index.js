// configuração inicial
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

require("dotenv").config();

// CONECTANDO AO DB
mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => {
    console.log("Banco de dados conectado!!!");
  })
  .catch((err) => {
    console.log("Eita, algo deu errado com a conexão do banco! ", err);
  });

// INICIANDO APP
const app = express();
const PORT = 3000;

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

//GO!!!
app.listen(PORT, () => {
  console.log(`Estou online na porta ${PORT}!!!`);
});
