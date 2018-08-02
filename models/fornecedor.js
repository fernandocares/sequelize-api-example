module.exports = (sequelize, DataTypes) => {

    var fornecedor = sequelize.define('fornecedor', {
        nome_fornecedor : DataTypes.STRING,
        rua_fornecedor : DataTypes.STRING,
        bairro_fornecedor : DataTypes.STRING,
        cidade_fornecedor : DataTypes.INTEGER,
        cpf_fornecedor : DataTypes.STRING,
        celular_fornecedor : DataTypes.STRING
    });

    return fornecedor;
};