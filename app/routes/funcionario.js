module.exports = (app, db) =>{

    //getAll
    app.get('/api/funcionario/', (req,res) =>{
        console.log('\nGET recebido em funcionario');

        db.funcionario.findAll({}).then( (result) =>{
            res.json(result);
        }).catch(function (err) {
            let exception = {
                "dao_messages" : [
                    {
                    "user_message" : "Erro ao tentar recuperar todos os dados de Funcionario no banco de dados",
                    "dev_message" : err
                    }
                ]
            };
            res.json(exception);
        });
    });

    //getById
    app.get('/api/funcionario/:id', (req,res) =>{
        console.log('\nGET recebido em funcionario');

        req.assert('id', 'Id de Funcionario nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.funcionario.findAll({
                where: {
                    id : req.params.id
                }
            }).then( (result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar recuperar todos os dados de Funcionario no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.status(400).json(exception);
            });
        }
    });

    //post
    app.post('/api/funcionario/', (req,res) =>{
        console.log('\nPOST recebido em funcionario');

        req.assert('nome_funcionario', 'Nome de Funcionario nulo ou vazio').notEmpty();

        req.assert('rua_funcionario', 'Rua de Funcionario nulo ou vazio').notEmpty();

        req.assert('bairro_funcionario', 'Bairro de Funcionario nulo ou vazio').notEmpty();

        req.assert('cidade_funcionario', 'Funcionario de Funcionario nulo ou vazio').notEmpty();
        
        req.assert('cpf_funcionario', 'Cpf de Funcionario nulo ou vazio').notEmpty();

        req.assert('data_nasc_funcionario', 'Data de Nascimento de Funcionario nulo ou vazio').notEmpty();

        req.assert('celular_funcionario', 'Celular de Funcionario nulo ou vazio').notEmpty();

        var validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.funcionario.create({
                nome_funcionario : req.body.nome_funcionario,
                rua_funcionario : req.body.rua_funcionario,
                bairro_funcionario : req.body.bairro_funcionario,
                cidade_funcionario : req.body.cidade_funcionario,
                cpf_funcionario : req.body.cpf_funcionario,
                data_nasc_funcionario : req.body.data_nasc_funcionario,
                celular_funcionario : req.body.celular_funcionario,
                cargo_funcionario : req.body.cargo_funcionario
            }).then((result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar registrar Funcionario no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });

    //put
    app.put('/api/funcionario/:id', (req,res) =>{
        console.log('\nPUT recebido em funcionario');

        req.assert('nome_funcionario', 'Nome de Funcionario nulo ou vazio').notEmpty();

        req.assert('rua_funcionario', 'Rua de Funcionario nulo ou vazio').notEmpty();

        req.assert('bairro_funcionario', 'Bairro de Funcionario nulo ou vazio').notEmpty();

        req.assert('funcionario_funcionario', 'Funcionario de Funcionario nulo ou vazio').notEmpty();
        
        req.assert('cpf_funcionario', 'Cpf de Funcionario nulo ou vazio').notEmpty();

        req.assert('data_nasc_funcionario', 'Data de Nascimento de Funcionario nulo ou vazio').notEmpty();

        req.assert('celular_funcionario', 'Celular de Funcionario nulo ou vazio').notEmpty();

        var validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.funcionario.update({ 
                nome_funcionario : req.body.nome_funcionario,
                rua_funcionario : req.body.rua_funcionario,
                bairro_funcionario : req.body.bairro_funcionario,
                cidade_funcionario : req.body.cidade_funcionario,
                cpf_funcionario : req.body.cpf_funcionario,
                data_nasc_funcionario : req.body.data_nasc_funcionario,
                celular_funcionario : req.body.celular_funcionario,
                cargo_funcionario : req.body.cargo_funcionario
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
                        "user_message" : "Erro ao tentar atualizar Funcionario no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });

    //delete
    app.delete('/api/funcionario/:id', (req,res) =>{
        console.log('\nDELETE recebido em funcionario');

        req.assert('id', 'Id de Funcionario nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.json(exception);
            return;
        }else{
            db.funcionario.destroy({
                where : {
                    id : req.params.id
                }
            }).then( (result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar deletar Funcionario no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.json(exception);
            });
        }
    });
}