//Conexão ao Banco de Dados
const mongoose = require("mongoose");

async function connectionDatabase() {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(
      "mongodb+srv://root:231090@cluster0.fe4ltuq.mongodb.net/?retryWrites=true&w=majority",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("Conexão ao Banco de Dados realizada com Sucesso!!!");
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

module.exports = connectionDatabase;
