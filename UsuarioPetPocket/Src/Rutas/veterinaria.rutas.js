const express = require('express');
const rutas = express.Router()

const { mostrar, mandar, lista, eliminar, traer, actualizar } = require('../Controladores/vet.controlador')

const { isLoggedIn } = require('../lib/auth')

rutas.get('/agregar/:id', isLoggedIn, mostrar)
rutas.post('/agregar/:id', isLoggedIn, mandar)
rutas.get('/lista/:id', isLoggedIn, lista)
rutas.get('/eliminar/:id', isLoggedIn, eliminar)
rutas.get('/editar/:id', isLoggedIn, traer)
rutas.post('/editar/:id', isLoggedIn, actualizar)

module.exports = rutas