const express = require("express");
const routes = express.Router();
const alunoController = require("../controllers/alunoController");


routes.get("/alunos/", alunoController.listar);
routes.get("/alunos/cadastrar/", alunoController.cadastrarGet);
routes.get("/alunos/:id", alunoController.filtrarAlunoId);
routes.post("/alunos", alunoController.cadastrarPost);


module.exports = routes;