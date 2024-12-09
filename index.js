const express = require("express");
const app = express();
app.use(express.static('public'));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const session = require("express-session");
app.use(session({
    secret: 'ifpe',
    saveUninitialized: false,
    resave: false
    }));
require('dotenv/config');
// Conexão com o banco de dados
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI); 

const alunoRoutes = require("./routes/alunoRoutes");
const usuarioRoutes = require("./routes/usuarioRoutes");


app.use(usuarioRoutes);
app.use(alunoRoutes);


app.get("/", function(req, res) {
    if(req.session.usuario){
        res.render("index");
    }else{
        res.redirect("/usuarios/login");
    }
    
});

app.listen(process.env.PORT, function() {
    console.log("Rodando ...");
});