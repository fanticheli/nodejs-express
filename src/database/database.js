const mongoose = require("mongoose");

const connectDb = () => {
  mongoose
    .connect(process.env.MONGO_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Banco de dados conectado!!!");
    })
    .catch((err) => {
      console.log("Eita, algo deu errado com a conexão do banco! ", err);
    });
};

module.exports = connectDb;
