const express=require('express');

//importando a rotas//
const PizzasRouter=require('./routers/PizzasRouter');

//Criar o servidor//
const server=express();


//criar a rota respondendo a requisição
    server.use('/',PizzasRouter);

server.listen(3000,()=>{console.log("Servidor rodando na porta 3000")});