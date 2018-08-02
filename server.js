var express = require('express');
var app = express();
var bodyparser = require('body-parser');
var expressValidator = require('express-validator');
var PORT = process.env.PORT || 3000;
var db = require('./models');
var nivelAcessoRoutes = require('./app/routes/nivel-acesso');
var clienteRoutes = require('./app/routes/cliente');
var cidadeRoutes = require('./app/routes/cidade');
var funcionarioRoutes = require('./app/routes/funcionario');
var produtoRoutes = require('./app/routes/produto');
var fornecedorRoutes = require('./app/routes/fornecedor');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended : true}));
app.use(bodyparser.text());
app.use(bodyparser.json({ application : "application/vmd.api+json"}));

app.use(expressValidator());

app.use(express.static("app/public"));

nivelAcessoRoutes(app, db);
clienteRoutes(app, db);
cidadeRoutes(app, db);
funcionarioRoutes(app, db);
produtoRoutes(app, db);
fornecedorRoutes(app, db);

db.sequelize.sync().then( () => {
    app.listen(PORT, () => {
        console.log(`Server rodando na porta ${PORT}`);
    });
});

