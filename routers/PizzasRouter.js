//importar o express
const express=require('express');

//importar o PizzasController
const PizzasController=require('../controllers/PizzasController')

//criar roteador 
module.exports= router= express.Router();

//definir rotas as quais ele respode
router.get('/pizzas',PizzasController.listar);
router.get('/pizzas/:id',PizzasController.getPizza);

//importa o roteador esta la em cima
