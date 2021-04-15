const db = require("../models");

const Livro = db.livros;

exports.create = (req, res) => {
    if(!req.body.nome || !req.body.autor || !req.body.data_lancamento || !req.body.data_aluguel){
        res.status(400).send({message: "Alguma informação não esta preenchida!"});
        return;
    }

    const livro = {
        nome: req.body.nome,
        autor: req.body.autor,
        sinopse: req.body.sinopse,
        data_lancamento: req.body.data_lancamento,
        data_aluguel: req.body.data_aluguel,
        status: req.body.status ? req.body.status : false
    }
    
    Livro.create(livro)
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({message: err.message || "Erro ao cadastrar livro"});
    })
}

exports.FindAll = (req, res) => {
    Livro.findAll()
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({message: err.message || "Erro ao buscar livros"});
    })
}

exports.FindByAutor = (req, res) => {
    const autor = req.body.autor;

    Livro.findAll({where: {autor: autor}})
    .then((data) => {
        res.send(data);
    })
    .catch((err) => {
        res.status(500).send({message: err.message || "Erro ao buscar livros por autor"});
    })
}

exports.update = (req, res) => {
    const id = req.params.id;

    Livro.update(req.body, {
        where: {id: id}
    })
    .then((num) => {
        if(num == 1)
            res.send({message: "Livro atualizado"});
        else
            res.status(400).send({message: `Id:${id} de livro não encontrado`});
        })
    .catch((err) => {
        res.status(500).send({message: err.message || "Erro ao atualizar livros"});
    })
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Livro.destroy({
        where: {id: id}
    })
    .then((num) => {
        if(num == 1)
            res.send({message: "Livro deletado"});
        else
            res.status(400).send({message: `Id:${id} de livro não encontrado`});
        })
    .catch((err) => {
        res.status(500).send({message: err.message || "Erro ao deletar livros"});
    })
}


