const UsuarioModel = require("../models/UsuarioModel");
const usuarioModel = require("../models/UsuarioModel");

class usuarioController {

    static async listar(req, res) {
        const status = req.query.c;
        const usuarios = await usuarioModel.find();
        res.render("usuario/listagem", {usuarios, status});
    }

    static async cadastrarPost(req, res) {
        if(req.body._id){//atualizar
            await usuarioModel.findOneAndUpdate({_id: req.body._id},{
                nome: req.body.nome,
                email: req.body.email,
                cpf: req.body.cpf,
                senha: req.body.senha
            });
            res.redirect("/usuarios?c=3");
        }else{//cadastrar
            const novousuario = new usuarioModel({
                nome: req.body.inp_nome,
                email: req.body.inp_email,
                cpf: req.body.inp_cpf,
                senha: req.body.inp_senha
            });
            await novousuario.save();
            res.redirect("/usuarios?c=1");
        }
       
    }

    static async cadastrarGet(req, res) {
        const cpf = req.params.cpf;
        let usuario = {};
        if(cpf != undefined){
            usuario = await usuarioModel.findOne({cpf});
        }
        res.render("usuario/cadastrar", {usuario});
    }

    static async filtrarusuario(req, res) {
        const id = req.params.cpf;
        const usuario = await usuarioModel.findOne({cpf: id});
        res.render("usuario/detalhar", { usuario });
    }

    static async remover(req, res) {
        const _cpf = req.params.cpf;
        await usuarioModel.deleteOne({ cpf: _cpf });
        res.redirect("/usuarios?c=2");
    }

    static async loginGet(req, res) {
        res.render("usuario/login");
    }

    static async loginPost(req, res) {
        const email = req.body.inp_email;
        const senha = req.body.inp_senha;
        const usuario = await UsuarioModel.findOne({email:email, senha:senha
        });
        if(usuario == null){
                res.redirect("/usuarios/login?e=1")
        }else{
            res.redirect("/");
        }
    }
}

module.exports = usuarioController;