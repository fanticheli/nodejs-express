// configuração inicial
const express = require("express");
const app = express();
const PORT = 3000;

//MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//GO!!!
app.listen(PORT, () => {
  console.log(`Estou online na porta ${PORT}!!!`);
});
