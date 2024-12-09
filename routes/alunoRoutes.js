const express = require("express");
const routes = express.Router();
const alunoController = require("../controllers/alunoController");
const auth = require("../middlewares/usuarioAuth");

routes.post("/alunos", auth, alunoController.cadastrarPost);
routes.get("/alunos/", auth, alunoController.listar);
routes.get("/alunos/cadastrar/:matricula?", auth, alunoController.cadastrarGet);// pode vir parâmetro ou não.
routes.get("/alunos/:id", auth, alunoController.filtrarAlunoId);
routes.get("/alunos/remover/:matricula", auth, alunoController.remover);


module.exports = routes;