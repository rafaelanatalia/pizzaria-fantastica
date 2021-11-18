//importar o express
const express=require('express');

//importar o PizzasController
const PizzasController=require('../controllers/PizzasController')

//criar roteador 
const router= express.Router();

//definir rotas as quais ele respode
router.get('/pizzas',PizzasController.listar);

//importa o roteador
module.exports=router