// como criar um roteadro
//import express
const express = require("express");

// importar o PizzasController
const PizzasController = require('../controllers/PizzasController');

//Criar roteador // Expostar o roteador
module.exports = router = express.Router();

//Definir rotas às quais ele responde

router.get('/busca',PizzasController.busca)
router.get('/', PizzasController.listar);
router.get('/pizzas', PizzasController.listar);
router.get('/pizzas/:id', PizzasController.getPizza);

