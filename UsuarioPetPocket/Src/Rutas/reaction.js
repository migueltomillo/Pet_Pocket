const {Router} =require('express');
const router = Router();

const {mensajeBienvenida} = require('../Controladores/mensaje_controlador');

router.get('/mensaje_bienvenida', mensajeBienvenida);

module.exports = router;