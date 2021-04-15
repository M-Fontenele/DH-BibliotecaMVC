const db = require("../models");

const Locatario = db.locatarios;

exports.create = (req, res) => {
    if(!req.body.nome || !req.body.cpf)
        res.status(400).send({message: "Erro campos obrigatorios não foram preenchidos"});
    const locatario = {
        nome: req.body.nome,
        cpf: req.body.cpf,
        status_cadastro: req.body.status_cadastro ? req.body.status_cadastro : false
    }
    
    Locatario.create(locatario)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({message: err.message || "Erro ao cadastrar locatario"});
    })
}

exports.FindByStatusActive = (req, res) => {
    Locatario.findAll({where: {status_cadastro: true}})
    .then((data) => {
        res.send(data)
    })
    .catch((err) => {
        res.status(500).send({message: err.message || "Erro ao buscar locatarios ativos"});
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Locatario.destroy({where: {id: id}})
    .then((num) => {
        if(num == 1)
            res.send({message: "Livro deletado"});
        else
            res.status(400).send({message: `Id:${id} de livro não encontrado`});
        })
    .catch((err) => {
        res.status(500).send({message: err.message || "Erro ao deletar locatario"});
    })
}