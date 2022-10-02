const express = require('express')
const rutas = express.Router()

const { mostrar, mandar, lista, traer, actualizar, eliminar }=require('../Controladores/preguntas_controlador')
const { isLoggedIn }=require('../Lib/auth')

rutas.get('/preguntas/:id',isLoggedIn,mostrar)
rutas.post('/preguntas/:id',isLoggedIn,mandar)
rutas.get('/preguntasLi/:id',isLoggedIn,lista)
rutas.get('/preguntasEd/:id',isLoggedIn,traer)
rutas.get('/preguntasEd/:id',isLoggedIn,actualizar)
rutas.get('/preguntasEd/:id',isLoggedIn,actualizar)
rutas.get('/preguntasEl/:id',isLoggedIn,eliminar)

module.exports=rutas