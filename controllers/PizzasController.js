const pizzas = require('../database/Pizzas.json')


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
    }
}
