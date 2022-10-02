const {Router} =require('express');
const router = Router();

const {denunciadoBienvenida} = require('../Controladores/denunciado_controlador');

router.get('/denunciado_bienvenida', denunciadoBienvenida);

module.exports = router;