module.exports = (sequelize, Sequelize) => {
    const Livro = sequelize.define("livro", {
        nome: {
            type: Sequelize.STRING
        },
        autor: {
            type: Sequelize.STRING
        },
        sinopse: {
            type: Sequelize.STRING
        },
        data_lancamento: {
            type: Sequelize.DATE
        },
        data_aluguel: {
            type: Sequelize.DATE
        },
        status: {
            type: Sequelize.BOOLEAN
        }
    });

    return Livro;
}