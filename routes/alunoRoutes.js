const express = require("express");
const routes = express.Router();
const alunoController = require("../controllers/alunoController");


routes.post("/alunos", alunoController.cadastrarPost);
routes.get("/alunos/", alunoController.listar);
routes.get("/alunos/cadastrar/:matricula?", alunoController.cadastrarGet);// pode vir parâmetro ou não.
routes.get("/alunos/:id", alunoController.filtrarAlunoId);
routes.get("/alunos/remover/:matricula", alunoController.remover);


module.exports = routes;