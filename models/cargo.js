module.exports = (sequelize, DataTypes) =>{

    var cargo = sequelize.define('cargo', {
        de_cargo : DataTypes.STRING,
        nivel_acesso_cargo : DataTypes.INTEGER
    });

    return cargo;
};