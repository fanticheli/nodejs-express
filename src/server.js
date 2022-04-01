const connectionDB = require("./database/connectionDB");
const app = require("./app");
const port = process.env.PORT || 3000;

connectionDB.connectToDb();

app.listen(port, () => {
  console.log(`Estou online na porta ${port}!!!`);
});
