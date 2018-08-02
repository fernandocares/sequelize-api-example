module.exports = (app, db) => {

    //getAll
    app.get('/api/fornecedor/', function (req, res) {
        console.log('\nGET recebido em fornecedor');
        
        db.fornecedor.findAll({}).then( (result) => {
            res.json(result);
        }).catch(function (err) {
            let exception = {
                "dao_messages" : [
                    {
                    "user_message" : "Erro ao tentar recuperar todos os dados de Fornecedor no banco de dados",
                    "dev_message" : err
                    }
                ]
            };
            res.json(exception);
        });
    });

    //getById
    app.get('/api/fornecedor/:id', (req,res) =>{
        console.log('\nGET recebido em fornecedor');

        req.assert('id', 'Id de Fornecedor nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.fornecedor.findAll({
                where: {
                    id : req.params.id
                }
            }).then( (result) =>{
                res.json(result);
            }).catch(function (err) {
                let exception = {
                    "dao_messages" : [
                        {
                        "user_message" : "Erro ao tentar recuperar todos os dados de Fornecedor no banco de dados",
                        "dev_message" : err
                        }
                    ]
                };
                res.status(400).json(exception);
            });
        }
    });
    
    //post
    app.post('/api/fornecedor/', function (req, res) {
        console.log('\nPOST recebido em fornecedor');

        req.assert('nome_fornecedor', 'Nome de Fornecedor nulo ou vazio').notEmpty();

        req.assert('rua_fornecedor', 'Rua de Fornecedor nulo ou vazio').notEmpty();

        req.assert('bairro_fornecedor', 'Bairro de Fornecedor nulo ou vazio').notEmpty();

        req.assert('cidade_fornecedor', 'Cidade de Fornecedor nulo ou vazio').notEmpty();
        
        req.assert('cpf_fornecedor', 'Cpf de Fornecedor nulo ou vazio').notEmpty();

        req.assert('celular_fornecedor', 'Celular de Fornecedor nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.fornecedor.create({
                nome_fornecedor : req.body.nome_fornecedor,
                rua_fornecedor : req.body.rua_fornecedor,
                bairro_fornecedor : req.body.rua_fornecedor,
                cidade_fornecedor : req.body.cidade_fornecedor,
                cpf_fornecedor : req.body.cpf_fornecedor,
                celular_fornecedor : req.body.celular_fornecedor
            }).then( (result) => {
                res.json(result);
            }).catch(function (err) {
                res.json("Erro ao tentar registrar Fornecedor no banco de dados");
            });
        }
    });

    //put
    app.put('/api/fornecedor/:id', function (req, res) {
        console.log('\nPUT recebido em fornecedor');

        req.assert('id', 'Id de Fornecedor nulo ou vazio').notEmpty();

        req.assert('nome_fornecedor', 'Nome de Fornecedor nulo ou vazio').notEmpty();

        req.assert('rua_fornecedor', 'Rua de Fornecedor nulo ou vazio').notEmpty();

        req.assert('bairro_fornecedor', 'Bairro de Fornecedor nulo ou vazio').notEmpty();

        req.assert('cidade_fornecedor', 'Cidade de Fornecedor nulo ou vazio').notEmpty();
        
        req.assert('cpf_fornecedor', 'Cpf de Fornecedor nulo ou vazio').notEmpty();

        req.assert('celular_fornecedor', 'Celular de Fornecedor nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.fornecedor.update({
                nome_fornecedor : req.body.nome_fornecedor,
                rua_fornecedor : req.body.rua_fornecedor,
                bairro_fornecedor : req.body.rua_fornecedor,
                cidade_fornecedor : req.body.cidade_fornecedor,
                cpf_fornecedor : req.body.cpf_fornecedor,
                celular_fornecedor : req.body.celular_fornecedor
            }, {
                where :{
                    id : req.params.id
                }
            }).then( (result) => {
                res.json(result);
            }).catch(function (err) {
                res.json("Erro ao tentar alterar Fornecedor no banco de dados");
            });
        }
    });
    //delete
    app.delete('/api/fornecedor/:id', function (req, res) {
        console.log('\nDELETE recebido em fornecedor');

        req.assert('id', 'Id de Fornecedor nulo ou vazio').notEmpty();

        validationMessages = req.validationErrors();

        if( validationMessages ){
            let exception = {
                "validationMessages" : validationMessages
            };
            res.status(400).json(exception);
            return;
        }else{
            db.fornecedor.destroy({
                where: {
                    id : req.params.id
                }
            }).then( (result) => {
                res.json(result);
            }).catch(function (err) {
                res.json("Erro ao tentar deletar Fornecedor no banco de dados");
            });
        }
    });
};