const express = require('express');
const rutas = express.Router()

const { mostrar, mandar, lista, traer, actualizar, eliminar }= require('../controladores/perdido.controlador')
const { isLoggedIn } = require('../lib/auth')

rutas.get('/agregar/:id', isLoggedIn, mostrar)
rutas.post('/agregar/:id', isLoggedIn, mandar)
rutas.get('/lista/:id', isLoggedIn, lista)
rutas.get('/eliminar/:id', isLoggedIn, eliminar)
rutas.get('/editar/:id', isLoggedIn, traer)
rutas.post('/editar/:id', isLoggedIn, actualizar)

module.exports= rutas