module.exports = (app, db) =>{

    //getAll
    app.get('/api/cargo/', (req,res) =>{
        console.log('\nGET recebido em cargo');

        db.cargo.findAll({}).then( (result) =>{
            res.json(result);
        }).catch(function (err) {
            let exception = {
                "dao_messages" : [
                    {
                    "user_message" : "Erro ao tentar recuperar todos os dados de Cargo no banco de dados",
                    "dev_message" : err
                    }
                ]
            };
            res.json(exception);
        });
    });

    //getById
    app.get('/api/cargo/:id', (req,res) =>{
        console.log('\nGET recebido em cargo');

        req.assert('id', 'Id de Cargo nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.cargo.findAll({
                where: {
                    id : req.params.id
                }
            }).then( (result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar recuperar todos os dados de Cargo no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.status(400).json(exception);
            });
        }
    });

    //post
    app.post('/api/cargo/', (req,res) =>{
        console.log('\nPOST recebido em cargo');

        req.assert('de_cargo', 'Nome de Cargo nulo ou vazio').notEmpty();

        req.assert('nivel_acesso_cargo', 'Uf de Cargo nulo ou vazio').notEmpty();

        var validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.cargo.create({
                nome_cargo : req.body.nome_cargo,
                uf_cargo : req.body.uf_cargo
            }).then((result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar registrar Cargo no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });

    //put
    app.put('/api/cargo/:id', (req,res) =>{
        console.log('\nPUT recebido em cargo');

        req.assert('id', 'Id de Cargo nulo ou vazio').notEmpty();

        req.assert('de_cargo', 'Nome de Cargo nulo ou vazio').notEmpty();

        req.assert('nivel_acesso_cargo', 'Uf de Cargo nulo ou vazio').notEmpty();

        var validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.cargo.update({ 
                nome_cargo : req.body.nome_cargo,
                uf_cargo : req.body.uf_cargo
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
                        "user_message" : "Erro ao tentar atualizar Cargo no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });

    //delete
    app.delete('/api/cargo/:id', (req,res) =>{
        console.log('\nDELETE recebido em cargo');

        req.assert('id', 'Id de Cargo nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.cargo.destroy({
                where : {
                    id : req.params.id
                }
            }).then( (result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar deletar Cargo no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });
}