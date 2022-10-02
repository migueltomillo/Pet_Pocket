const express = require('express');
const router = express.Router();

const { mostrar, mandar, lista, traer, actualizar, eliminar } = require('../Controladores/bells_controlador');
const { isLoggedIn } = require('../lib/auth')


router.get('/agregar/:id', isLoggedIn, mostrar)
router.post('/agregar/:id', isLoggedIn, mandar)
router.get('/listar/:id', isLoggedIn, lista)
router.get('/eliminar/:id', isLoggedIn, eliminar)
router.get('/editar/:id', isLoggedIn, traer)
router.post('/editar/:id', isLoggedIn, actualizar)

module.exports = router;