const express = require('express');
const rutas = express.Router()

const {  lista, traer, editar } = require('../controladores/rol.controlador')

const { isLoggedIn } = require('../lib/auth')


rutas.get('/lista/:id', isLoggedIn, lista)
rutas.get('/editar/:id', isLoggedIn, traer)
rutas.post('/editar/:id', isLoggedIn, editar)

module.exports = rutas