const {Router} =require('express');
const router = Router();

const {publicationBienvenida} = require('../Controladores/publication_controlador');

router.get('/publication_bienvenida', publicationBienvenida);

module.exports = router;