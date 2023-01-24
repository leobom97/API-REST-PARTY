const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

app.use(express.json());

//Database Connection
const connection = require("./database/connection");
connection();

//Rotas
const routes = require("./routes/router");

app.use("/partiesLTDA", routes);

app.get("/", (req, res) => {
  res.send("Testando API");
});

module.exports = app;
