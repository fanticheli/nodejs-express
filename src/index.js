// configuração inicial
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const connectDb = require("./database/database");

connectDb();
const app = express();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  console.log(`Estou online na porta ${port}!!!`);
});
