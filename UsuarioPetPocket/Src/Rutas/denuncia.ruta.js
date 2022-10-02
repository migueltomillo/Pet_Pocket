const {Router} =require('express');
const router = Router();

const {denunciaBienvenida} = require('../Controladores/denuncia_controlador');

router.get('/denuncia_bienvenida', denunciaBienvenida);

module.exports = router;