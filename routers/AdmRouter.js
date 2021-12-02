
const express = require("express");
const PizzasController = require('../controllers/PizzasController');

//Criar roteador // Expostar o roteador
module.exports = AdmRouter = express.Router();

AdmRouter.get('/pizzas/create',(PizzasController.create));