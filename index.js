const express = require("express");
const app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// Conexão com o banco de dados
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://evqv:SwJawRTAy62Z4A0H@cluster0.qw2ux.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'); 

const alunoRoutes = require("./routes/alunoRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");

app.use(usuarioRoutes);
app.use(alunoRoutes);

app.get("/", function(req, res) {
    res.render("index");
});

app.listen("999", function() {
    console.log("Rodando ...");
});