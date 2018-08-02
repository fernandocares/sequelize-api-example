module.exports = (sequelize, DataTypes) => {

    var nivel = sequelize.define('nivel', {
        de_nivel : DataTypes.STRING,
    });

    return nivel;
};