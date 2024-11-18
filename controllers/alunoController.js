const AlunoModel = require("../models/AlunoModel");

class AlunoController {

    static async listar(req, res) {
        const status = req.query.c;
        const alunos = await AlunoModel.find();
        res.render("aluno/listagem", {alunos, status});
    }

    static async cadastrarPost(req, res) {
        if(req.body._id){//atualizar
            await AlunoModel.findOneAndUpdate({_id: req.body._id},{
                matricula:req.body.matricula,
                nome: req.body.nome,
                curso:req.body.curso
            });
            res.redirect("/alunos?c=3");
        }else{//cadastrar
            const novoAluno = new AlunoModel({
                matricula: req.body.inp_matricula,
                nome: req.body.inp_nome,
                curso: req.body.inp_curso
            });
            await novoAluno.save();
            res.redirect("/alunos?c=1");
        }
       
    }

    static async cadastrarGet(req, res) {
        const matricula = req.params.matricula;
        let aluno = {};
        if(matricula != undefined){
            aluno = await AlunoModel.findOne({matricula});
        }
        res.render("aluno/cadastrar", {aluno});
    }

    static async filtrarAlunoId(req, res) {
        const id = req.params.id;
        const aluno = await AlunoModel.findOne({matricula: id});
        res.render("aluno/detalhar", { aluno });
    }

    static async remover(req, res) {
        const mat = req.params.matricula;
        await AlunoModel.deleteOne({ matricula: mat });
        res.redirect("/alunos?c=2");
    }

}

module.exports = AlunoController;