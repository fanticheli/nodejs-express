// configuração inicial
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const connectDb = require("./database/database");

connectDb();

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
