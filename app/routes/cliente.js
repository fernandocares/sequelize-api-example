module.exports = (app, db) => {

    //getAll
    app.get('/api/cliente/', function (req, res) {
        console.log('\nGET recebido em cliente');
        
        db.cliente.findAll({}).then( (result) => {
            res.json(result);
        }).catch(function (err) {
            let exception = {
                "dao_messages" : [
                    {
                    "user_message" : "Erro ao tentar recuperar todos os dados de Cliente no banco de dados",
                    "dev_message" : err
                    }
                ]
            };
            res.json(exception);
        });
    });

    //getById
    app.get('/api/cliente/:id', (req,res) =>{
        console.log('\nGET recebido em cliente');

        req.assert('id', 'Id de Cliente nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.cliente.findAll({
                where: {
                    id : req.params.id
                }
            }).then( (result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar recuperar todos os dados de Cliente no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.status(400).json(exception);
            });
        }
    });
    
    //post
    app.post('/api/cliente/', function (req, res) {
        console.log('\nPOST recebido em cliente');

        req.assert('nome_cliente', 'Nome de Cliente nulo ou vazio').notEmpty();

        req.assert('rua_cliente', 'Rua de Cliente nulo ou vazio').notEmpty();

        req.assert('bairro_cliente', 'Bairro de Cliente nulo ou vazio').notEmpty();

        req.assert('cidade_cliente', 'Cidade de Cliente nulo ou vazio').notEmpty();
        
        req.assert('cpf_cliente', 'Cpf de Cliente nulo ou vazio').notEmpty();

        req.assert('data_nasc_cliente', 'Data de Nascimento de Cliente nulo ou vazio').notEmpty();

        req.assert('celular_cliente', 'Celular de Cliente nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.cliente.create({
                nome_cliente : req.body.nome_cliente,
                rua_cliente : req.body.rua_cliente,
                bairro_cliente : req.body.bairro_cliente,
                cidade_cliente : req.body.cidade_cliente,
                cpf_cliente : req.body.cpf_cliente,
                data_nasc_cliente : req.body.data_nasc_cliente,
                celular_cliente : req.body.celular_cliente
            }).then( (result) => {
                res.json(result);
            }).catch(function (err) {
                res.json("Erro ao tentar registrar Cliente no banco de dados");
            });
        }
    });

    //put
    app.put('/api/cliente/:id', function (req, res) {
        console.log('\nPUT recebido em cliente');

        req.assert('id', 'Id de Cliente nulo ou vazio').notEmpty();

        req.assert('nome_cliente', 'Nome de Cliente nulo ou vazio').notEmpty();

        req.assert('rua_cliente', 'Rua de Cliente nulo ou vazio').notEmpty();

        req.assert('bairro_cliente', 'Bairro de Cliente nulo ou vazio').notEmpty();

        req.assert('cidade_cliente', 'Cidade de Cliente nulo ou vazio').notEmpty();
        
        req.assert('cpf_cliente', 'Cpf de Cliente nulo ou vazio').notEmpty();

        req.assert('data_nasc_cliente', 'Data de Nascimento de Cliente nulo ou vazio').notEmpty();

        req.assert('celular_cliente', 'Celular de Cliente nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.cliente.update({
                nome_cliente : req.body.nome_cliente,
                rua_cliente : req.body.rua_cliente,
                bairro_cliente : req.body.bairro_cliente,
                cidade_cliente : req.body.cidade_cliente,
                cpf_cliente : req.body.cpf_cliente,
                data_nasc_cliente : req.body.data_nasc_cliente,
                celular_cliente : req.body.celular_cliente,
                email_cliente : req.body.email_cliente
            }, {
                where :{
                    id : req.params.id
                }
            }).then( (result) => {
                res.json(result);
            }).catch(function (err) {
                res.json("Erro ao tentar alterar Cliente no banco de dados");
            });
        }
    });
    //delete
    app.delete('/api/cliente/:id', function (req, res) {
        console.log('\nDELETE recebido em cliente');

        req.assert('id', 'Id de Cliente nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.cliente.destroy({
                where: {
                    id : req.params.id
                }
            }).then( (result) => {
                res.json(result);
            }).catch(function (err) {
                res.json("Erro ao tentar deletar Cliente no banco de dados");
            });
        }
    });
};