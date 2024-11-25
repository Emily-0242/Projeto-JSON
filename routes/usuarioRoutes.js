const express = require("express");
const routes = express.Router();
const usuarioController = require("../controllers/usuarioController");


routes.post("/usuarios", usuarioController.cadastrarPost);
routes.get("/usuarios/", usuarioController.listar);
routes.get("/usuarios/cadastrar/:cpf?", usuarioController.cadastrarGet);// pode vir parâmetro ou não.
routes.get("/usuarios/remover/:id", usuarioController.remover);
routes.get("/usuarios/login", usuarioController.loginGet);
routes.post("/usuarios/login", usuarioController.loginPost);
routes.get("/usuarios/:cpf", usuarioController.filtrarusuario);


module.exports = routes;