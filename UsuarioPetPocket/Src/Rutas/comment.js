const {Router} =require('express');
const router = Router();

const {commentBienvenida} = require('../Controladores/comment.controlador');

router.get('/comment_bienvenida', commentBienvenida);

module.exports = router;