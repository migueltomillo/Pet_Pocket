const express = require('express');
const rutas = express.Router()

const { mostrarRegistro,registro, mostrarLogin, Login, cierreSesion } = require ("../Controladores/registro.controlador")

rutas.get("/registro", mostrarRegistro)
rutas.post("/registro", registro)
rutas.get("/login", mostrarLogin)
rutas.post("/login", Login)
rutas.get("/CerrarSecion", cierreSesion)


module.exports = rutas