const pizzas=require('../database/Pizzas.json')

module.exports=controller ={
    listar:(req,res)=>{
        res.send(pizzas)
    }




    }
    