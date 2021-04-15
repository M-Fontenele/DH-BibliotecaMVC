module.exports = (sequelize, Sequelize) => {
    const Locatario = sequelize.define("locatario", {
        nome: {
            type: Sequelize.STRING
        },
        cpf: {
            type: Sequelize.STRING(11)
        },
        status_cadastro: {
            type: Sequelize.BOOLEAN
        }
    });

    return Locatario;
}