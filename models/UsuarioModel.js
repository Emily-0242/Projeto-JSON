const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = Schema({
    nome: String,
    email:String,
    cpf:String,
    senha:String
});

module.exports = mongoose.model("Usuario", usuarioSchema);