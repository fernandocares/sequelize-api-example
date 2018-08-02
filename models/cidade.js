module.exports = (sequelize, DataTypes) =>{

    var cidade = sequelize.define('cidade', {

        nome_cidade : DataTypes.STRING,
        uf_cidade : DataTypes.STRING
    });

    return cidade;
}