const {Router} =require('express');
const router = Router();

const {perdido} = require('../Controladores/tienda_controlador');

router.get('/tienda', perdido);

module.exports = router;