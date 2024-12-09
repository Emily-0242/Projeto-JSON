const express = require("express");
const routes = express.Router();
const usuarioController = require("../controllers/usuarioController");
const auth = require("../middlewares/usuarioAuth");

routes.post("/usuarios",  usuarioController.cadastrarPost);
routes.get("/usuarios/", auth, usuarioController.listar);
routes.get("/usuarios/cadastrar/:cpf?", usuarioController.cadastrarGet);// pode vir parâmetro ou não.
routes.get("/usuarios/login", usuarioController.loginGet);
routes.get("/usuarios/logout", auth, usuarioController.logout);
routes.post("/usuarios/login", usuarioController.loginPost);
routes.get("/usuarios/remover/:cpf", auth, usuarioController.remover);
routes.get("/usuarios/cadastrar/:cpf", auth, usuarioController.filtrarusuario);



module.exports = routes;