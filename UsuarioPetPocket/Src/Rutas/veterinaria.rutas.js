const express = require('express');
const { Mostrar } = require('../Controladores/index.controlador');
const rutas = express.Router()

const {} = require('../Controladores/veterinaria.controlador')
const {} = require('../Lib/auth');


rutas.get('/', Mostrar)

module.exports = router;