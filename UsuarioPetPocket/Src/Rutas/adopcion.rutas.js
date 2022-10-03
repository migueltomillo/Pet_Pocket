const express = require('express');
const rutas = express.Router()

const { mostrar, mandar, lista, traer, actualizar, eliminar } = require("../Controladores/adopcion.controlador")

rutas.get('/adopcion', mostrar)
rutas.post("/adopcion/agregar/:id", mandar)
rutas.get("/adopcion/lista", lista)
rutas.get('/adopcion/eliminar/:id', eliminar)
rutas.post('/adopcion/editar/:id', actualizar)
rutas.get('/adopcion/editar/:id', traer)
rutas.get('/adopcion/eliminar/:id', eliminar)

module.exports = rutas