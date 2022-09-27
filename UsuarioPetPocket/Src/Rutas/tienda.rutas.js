const {Router} =require('express');
const router = Router();

const {TiendaPetpocket} = require('../Controladores/tienda_controlador');

router.get('/tienda', TiendaPetpocket);

module.exports = router;