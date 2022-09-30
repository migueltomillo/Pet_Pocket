const express = require('express');
const router = express.Router();

const { mostrar, mandar, lista, traer, actualizar } = require('../Controladores/vet.controlador');
const { isLoggedIn } = require('../lib/auth')


router.get('/agregar/:id', mostrar)
router.post('/agregar/' , mandar)
router.get('/lista/:id', lista)
router.get('/editar/:id', traer)
router.post('/lista/:id', actualizar)

module.exports = router;