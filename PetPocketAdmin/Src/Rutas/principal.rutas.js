const {Router} =require('express');
const router = Router();

const {carnetRegistro} = require('../Controladores/principal_controlador');

router.get('/registro_carnet', carnetRegistro);

module.exports = router;