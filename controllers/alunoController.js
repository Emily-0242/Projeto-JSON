const AlunoModel = require("../models/AlunoModel");

class AlunoController {

    static async listar(req, res) {
        const status = req.query.c;
        const alunos = await AlunoModel.find();
        res.render("aluno/listagem", {alunos, status})
    }

    static async cadastrarPost(req, res) {
        const novoAluno = new AlunoModel({
            matricula: req.body.inp_matricula,
            nome: req.body.inp_nome,
            curso: req.body.inp_curso
        });
        await novoAluno.save();
        res.redirect("/alunos?c=1");
    }

    static async cadastrarGet(req, res) {
        res.render("aluno/cadastrar");
    }

    static async filtrarAlunoId(req, res) {
        const id = req.params.id;
        const aluno = await AlunoModel.findOne({matricula: id});
        res.render("aluno/detalhar", { aluno });
    }
}

module.exports = AlunoController;