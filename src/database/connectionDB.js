const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");
class ConnectionDB {
  connectToDb() {
    this.connect(process.env.MONGO_CONNECTION);
  }

  async connectToFakeDb() {
    const mongoServer = await MongoMemoryServer.create();
    const connectString = mongoServer.getUri();

    this.connect(connectString);
  }

  connect(connectString) {
    mongoose
      .connect(connectString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        console.log("Banco de dados conectado!!!");
      })
      .catch((err) => {
        console.log("Eita, algo deu errado com a conexão do banco! ", err);
      });
  }
}

module.exports = new ConnectionDB();
