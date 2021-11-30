// importar Express
const express = require("express");

// Importando o roteador
const PizzasRouter = require("./routers/PizzasRouter");

// Criar o servidor
const server = express();

// Configurar o View engine para EJS
server.set("view engine", "ejs");
// essa linha só é necessaria caso precise renomear a pasta ou mudar a rota
server.set('views', './views');

//confgurar a pasta public
server.use(express.static(__dirname + '/public'));

// Criar a rota respondendo a requisição
server.use('/', PizzasRouter);

// Levantando o servidor
server.listen(3000, ()=>{
    console.log("servidor rodando...")
});
