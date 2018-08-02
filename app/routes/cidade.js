module.exports = (app, db) =>{

    //getAll
    app.get('/api/cidade/', (req,res) =>{
        console.log('\nGET recebido em cidade');

        db.cidade.findAll({}).then( (result) =>{
            res.json(result);
        }).catch(function (err) {
            let exception = {
                "dao_messages" : [
                    {
                    "user_message" : "Erro ao tentar recuperar todos os dados de Cidade no banco de dados",
                    "dev_message" : err
                    }
                ]
            };
            res.json(exception);
        });
    });

    //getById
    app.get('/api/cidade/:id', (req,res) =>{
        console.log('\nGET recebido em cidade');

        req.assert('id', 'Id de Cidade nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.cidade.findAll({
                where: {
                    id : req.params.id
                }
            }).then( (result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar recuperar todos os dados de Cidade no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.status(400).json(exception);
            });
        }
    });

    //post
    app.post('/api/cidade/', (req,res) =>{
        console.log('\nPOST recebido em cidade');

        req.assert('nome_cidade', 'Nome de Cidade nulo ou vazio').notEmpty();

        req.assert('uf_cidade', 'Uf de Cidade nulo ou vazio').notEmpty();
        req.assert('uf_cidade', 'Uf de Cidade precisa conter 2 ou mais caracteres').isLength({ min: 2});

        var validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.cidade.create({
                nome_cidade : req.body.nome_cidade,
                uf_cidade : req.body.uf_cidade
            }).then((result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar registrar Cidade no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });

    //put
    app.put('/api/cidade/:id', (req,res) =>{
        console.log('\nPUT recebido em cidade');

        req.assert('id', 'Id de Cidade nulo ou vazio').notEmpty();

        req.assert('nome_cidade', 'Nome de Cidade nulo ou vazio').notEmpty();

        req.assert('uf_cidade', 'Uf de Cidade nulo ou vazio').notEmpty();
        req.assert('uf_cidade', 'Uf de Cidade precisa conter 2 ou mais caracteres').isLength({ min: 2});

        var validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.cidade.update({ 
                nome_cidade : req.body.nome_cidade,
                uf_cidade : req.body.uf_cidade
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
                        "user_message" : "Erro ao tentar atualizar Cidade no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });

    //delete
    app.delete('/api/cidade/:id', (req,res) =>{
        console.log('\nDELETE recebido em cidade');

        req.assert('id', 'Id de Cidade nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.cidade.destroy({
                where : {
                    id : req.params.id
                }
            }).then( (result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar deletar Cidade no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });
}