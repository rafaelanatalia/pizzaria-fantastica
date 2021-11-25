const pizzas=require('../database/Pizzas.json')

//importar o controller
module.exports=controller ={
    listar:(req,res)=>{
        res.send(pizzas)
    },

    getPizza:(req,res) =>{ 
        // capturar o id requisitado (req.params)
        const idPizza=req.params.id;
        //capturar do array a pizza com o id requisitado (pizzas.find)
        const pizza= pizzas.find(p =>p.id==idPizza);
     
        //retorna a pizza encontrada para o cliente(res.send())
        res.render('pizza',{pizza});
    
    }

}
    