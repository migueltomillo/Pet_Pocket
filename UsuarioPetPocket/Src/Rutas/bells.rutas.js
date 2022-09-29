const express = require('express');
const router = express.Router();

const { mostrar, mandar, lista, traer, actualizar, eliminar } = require('../Controladores/bells_controlador');
const { isLoggedIn } = require('../lib/auth')


router.get('/agregar/:id', mostrar)
router.post('/agregar/' , mandar)
router.get('/listar/:id', lista)
router.get('/editar/:id', traer)
router.post('/editar/:id', actualizar)
router.get('/eliminar/:id', eliminar)

module.exports = router;