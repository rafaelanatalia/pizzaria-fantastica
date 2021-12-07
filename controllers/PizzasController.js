const pizzas = require('../database/Pizzas.json')
const fs= require('fs')

module.exports =controller = {
    listar: (req, res)=> {
        return res.render('index',{pizzas, busca:""});
        //res.send(pizzas)
    },

    getPizza: (req, res) => {
        

        let idPizza = req.params.id;
        let pizza = pizzas.find(pizzas=> pizzas.id == idPizza)
        res.render('pizza', {pizza});
        // criar um if/else caso não tenha a pizza
    },

    busca:(req,res) =>{
        //capturar a string digitada pelo visitante
        let string= req.query.q.trim();
        
        //filtrar do array de pizzas somente as pizza somente a string 
        //buscadas pelo visitante
        let pizzasFiltras=pizzas.filter(

            p=>p.nome.toUpperCase().includes(string.toUpperCase())
        );
            
        //rendenizar a view index passando para ela as pizzas filtradas
        res.render('index',{pizzas:pizzasFiltras, busca:string});
    },
    create:(req,res)=>{
        res.render("crud-pizzas/create.ejs")
    },
    store: (req,res) => {

        const nome = req.body.nome;
        const ingredientes = req.body.ingredientes.split(',').map(a => a.trim());
        const preco = Number(req.body.preco);
        const pizza = {nome, ingredientes, preco, img:""}
        
        // Adicionar o id à pizza recém criada
        pizza.id=pizzas[pizza.length-1].id+1;
        // Adicionar a pizza ao array de pizzas
        pizza.push(pizza);
        // Salvar o json do array de pizzas no arquivo Pizzas.json
        // fs.writeFileSync(...)
        fs.writeFileSync(
            __dirname+'/../database/pizzas.json',
            Json.stringify(pizzas,null,4),
            {flag:'w'}
            
            );
        // Direcionar o usuário para a página que exibe a lista de pizzas
        // res.redirect(...)
        
        res.redirect('/adm/pizzas');

    }
}
