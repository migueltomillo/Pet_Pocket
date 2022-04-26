const {Router} =require('express');
const router = Router();

const {principalWeb} = require('../Controladores/bienvenida_controlador');

router.get('/inicio', principalWeb);

module.exports = router;