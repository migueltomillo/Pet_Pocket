const express = require('express')
const rutas = express.Router()

const { mostrar, mandar, lista, traer, actualizar, eliminar }=require('../Controladores/preguntas_controlador')
const { isLoggedIn }=require('../Lib/auth')

rutas.get('/preguntas/:id',mostrar)
rutas.post('/preguntas/',mandar)
rutas.get('/preguntasLi/:id',lista)
rutas.get('/preguntasEd/:id',traer)
rutas.get('/preguntasEd/:id',actualizar)
rutas.get('/preguntasEd/:id',actualizar)
rutas.get('/preguntasEl/:id',eliminar)

module.exports=rutas