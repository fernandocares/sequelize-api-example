module.exports = (app, db) =>{

    //getAll
    app.get('/api/produto/', (req,res) =>{
        console.log('\nGET recebido em produto');

        db.produto.findAll({}).then( (result) =>{
            res.json(result);
        }).catch(function (err) {
            let exception = {
                "dao_messages" : [
                    {
                    "user_message" : "Erro ao tentar recuperar todos os dados de Produto no banco de dados",
                    "dev_message" : err
                    }
                ]
            };
            res.json(exception);
        });
    });

    //getById
    app.get('/api/produto/:id', (req,res) =>{
        console.log('\nGET recebido em produto');

        req.assert('id', 'Id de Produto nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.produto.findAll({
                where: {
                    id : req.params.id
                }
            }).then( (result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar recuperar todos os dados de Produto no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.status(400).json(exception);
            });
        }
    });

    //post
    app.post('/api/produto/', (req,res) =>{
        console.log('\nPOST recebido em produto');

        req.assert('de_produto', 'Descrição de Produto nulo ou vazio').notEmpty();

        req.assert('tipo_produto', 'Tipo de Produto nulo ou vazio').notEmpty();

        req.assert('und_med_produto', 'Unidade de Medida de Produto nulo ou vazio').notEmpty();

        req.assert('qt_atual_produto', 'Quantidade Atual de Produto nulo ou vazio').notEmpty();

        req.assert('qt_minima_produto', 'Quantidade Mínima de Produ to nulo ou vazio').notEmpty();

        req.assert('preco_produto', 'Preço de Produto nulo ou vazio').notEmpty();

        req.assert('perm_devolucao_produto', 'Permite Devolução de Produto nulo ou vazio').notEmpty();

        var validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.produto.create({
                de_produto : req.body.de_produto,
                tipo_produto : req.body.tipo_produto,
                und_med_produto : req.body.und_med_produto,
                qt_atual_produto : req.body.qt_atual_produto,
                qt_minima_produto : req.body.qt_minima_produto,
                preco_produto : req.body.preco_produto,
                perm_devolucao_produto : req.body.perm_devolucao_produto
            }).then((result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar registrar Produto no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });

    //put
    app.put('/api/produto/:id', (req,res) =>{
        console.log('\nPUT recebido em produto');

        req.assert('de_produto', 'Descrição de Produto nulo ou vazio').notEmpty();

        req.assert('tipo_produto', 'Tipo de Produto nulo ou vazio').notEmpty();

        req.assert('und_med_produto', 'Unidade de Medida de Produto nulo ou vazio').notEmpty();

        req.assert('qt_atual_produto', 'Quantidade Atual de Produto nulo ou vazio').notEmpty();

        req.assert('qt_minima_produto', 'Quantidade Mínima de Produ to nulo ou vazio').notEmpty();

        req.assert('preco_produto', 'Preço de Produto nulo ou vazio').notEmpty();

        req.assert('perm_devolucao_produto', 'Permite Devolução de Produto nulo ou vazio').notEmpty();

        var validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.produto.update({ 
                de_produto : req.body.de_produto,
                tipo_produto : req.body.tipo_produto,
                und_med_produto : req.body.und_med_produto,
                qt_atual_produto : req.body.qt_atual_produto,
                qt_minima_produto : req.body.qt_minima_produto,
                preco_produto : req.body.preco_produto,
                perm_devolucao_produto : req.body.perm_devolucao_produto
            }, {
                where : {
                    id : req.params.id
                }
            }).then( (result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar atualizar Produto no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });

    //delete
    app.delete('/api/produto/:id', (req,res) =>{
        console.log('\nDELETE recebido em produto');

        req.assert('id', 'Id de Produto nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.produto.destroy({
                where : {
                    id : req.params.id
                }
            }).then( (result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar deletar Produto no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });
}