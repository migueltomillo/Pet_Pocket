const express = require('express');
const rutas = express.Router()

const { Mostrar } = require ("../Controladores/index.controlador")

rutas.get("/", Mostrar)

module.exports = rutas