module.exports = (sequelize, DataTypes) =>{

    var produto = sequelize.define('produto', {

        de_produto : DataTypes.STRING,
        tipo_produto : DataTypes.INTEGER,
        und_med_produto : DataTypes.INTEGER,
        qt_atual_produto : DataTypes.REAL(6,3),
        qt_minima_produto : DataTypes.REAL(6,3),
        preco_produto : DataTypes.REAL(6,3),
        perm_devolucao_produto : DataTypes.BOOLEAN
    });

    return produto;
}