module.exports = (sequelize, DataTypes) => {

    var funcionario = sequelize.define('funcionario', {
        nome_funcionario : DataTypes.STRING,
        rua_funcionario : DataTypes.STRING,
        bairro_funcionario : DataTypes.STRING,
        cidade_funcionario : DataTypes.INTEGER,
        cpf_funcionario : DataTypes.STRING,
        data_nasc_funcionario : DataTypes.DATEONLY,
        celular_funcionario : DataTypes.STRING,
        cargo_funcionario : DataTypes.INTEGER
    });

    return funcionario;
};