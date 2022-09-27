const {Router} =require('express');
const router = Router();

const {campañaRegistro} = require('../Controladores/campaña_controlador');

router.get('/campañas_mascotas', campañaRegistro);

module.exports = router;