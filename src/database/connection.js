//Conexão ao Banco de Dados
const mongoose = require('mongoose');

async function main(){
    try{
        mongoose.set("strictQuery", true);
        mongoose.connect("mongodb://localhost:27017/praticaapimongo",{useUnifiedTopology:true})
        console.log("Conexão ao Banco de Dados realizada com Sucesso!!!")
    }catch(error){
        console.log(error)
    }
}


module.exports = main;