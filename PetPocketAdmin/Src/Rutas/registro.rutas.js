const express = require('express');
const rutas = express.Router()

const { mostrarRegistro, Registro, mostrarLogin, Login, cierreSesion } = require ("../Controladores/registro.controlador")

rutas.get("/registro", mostrarRegistro)
rutas.post("/registro", Registro)
rutas.get("/login", mostrarLogin)
rutas.post("/login", Login)
rutas.get("/CerrarSecion", cierreSesion)

module.exports = rutas