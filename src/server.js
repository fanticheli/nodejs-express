const connectDb = require("./database/database");
const app = require("./app");
const port = process.env.PORT || 3000;

connectDb();

app.listen(port, () => {
  console.log(`Estou online na porta ${port}!!!`);
});
