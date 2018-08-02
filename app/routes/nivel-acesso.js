module.exports = (app, db) =>{

    //getAll
    app.get('/api/nivelAcesso/', (req,res) =>{
        console.log('\nGET recebido em nivelAcesso');

        db.nivel.findAll({}).then( (result) =>{
            res.json(result);
        }).catch(function (err) {
            let exception = {
                "dao_messages" : [
                    {
                    "user_message" : "Erro ao tentar recuperar todos os dados de NivelAcesso no banco de dados",
                    "dev_message" : err
                    }
                ]
            };
            res.json(exception);
        });
    });

    //getById
    app.get('/api/nivelAcesso/:id', (req,res) =>{
        console.log('\nGET recebido em nivelAcesso');

        req.assert('id', 'Id de NivelAcesso nulo ou vazio').notEmpty();

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
                        "user_message" : "Erro ao tentar recuperar todos os dados de NivelAcesso no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.status(400).json(exception);
            });
        }
    });

    //post
    app.post('/api/nivelAcesso/', (req,res) =>{
        console.log('\nPOST recebido em nivelAcesso');

        req.assert('de_nivel', 'Descrição de Cidade nulo ou vazio').notEmpty();

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
                        "user_message" : "Erro ao tentar registrar NivelAcesso no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });

    //put
    app.put('/api/nivelAcesso/:id', (req,res) =>{
        console.log('\nPUT recebido em nivelAcesso');

        req.assert('id', 'Id de NivelAcesso nulo ou vazio').notEmpty();

        req.assert('de_nivel', 'Descrição de NivelAcesso nulo ou vazio').notEmpty();

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
                        "user_message" : "Erro ao tentar atualizar NivelAcesso no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });

    //delete
    app.delete('/api/nivelAcesso/:id', (req,res) =>{
        console.log('\nDELETE recebido em nivelAcesso');

        req.assert('id', 'Id de NivelAcesso nulo ou vazio').notEmpty();

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
                        "user_message" : "Erro ao tentar deletar NivelAcesso no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });
}