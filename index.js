// importar Express
const express = require("express");

// Importando o roteador
const PizzasRouter = require("./routers/PizzasRouter");
const AdmRouter=require("./routers/AdmRouter");

// Criar o servidor
const server = express();

// Configurar o View engine para EJS
server.set("view engine", "ejs");
// essa linha só é necessaria caso precise renomear a pasta ou mudar a rota
server.set('views', './views');

//config o pross.. de usuario
server.use(express.json());
server.use(express.urlencoded({extended:false}));


//confgurar a pasta public
server.use(express.static(__dirname + '/public'));


// Criar a rota respondendo a requisição
server.use('/', PizzasRouter);
server.use('/adm',AdmRouter);


// Levantando o servidor
server.listen(3000, ()=>{
    console.log("servidor rodando...")
});
