module.exports = (sequelize, DataTypes) => {

    var cliente = sequelize.define('cliente', {
        nome_cliente : DataTypes.STRING,
        rua_cliente : DataTypes.STRING,
        bairro_cliente : DataTypes.STRING,
        cidade_cliente : DataTypes.STRING,
        cpf_cliente : DataTypes.STRING,
        data_nasc_cliente : DataTypes.DATEONLY,
        celular_cliente : DataTypes.STRING
    });

    return cliente;
};