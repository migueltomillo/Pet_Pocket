const DenunciaCTl = {}

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')

DenunciaCTl.mostrar = (req, res) => {
    res.render('denuncialo/denunciados');
}

DenunciaCTl.mandar = async (req, res) => {
     const id = req.user.idUsuario
    const { fotoDenuncia, categoriaDenuncia, descripccionDenuncia, tituloDenuncia } = req.body
    const nuevoDenuncia = {
        fotoDenuncia,
        categoriaDenuncia,
        descripccionDenuncia,
        tituloDenuncia,
    }
    await orm.Denuncia.create(nuevoDenuncia)
    req.flash('success', 'Guardado con exito')
    res.redirect('/denuncia/lista/' + id);
}

DenunciaCTl.lista = async (req, res) => {
    const lista = await sql.query('select * from denuncias')
    res.render('denuncia/lista', { lista })
}

DenunciaCTl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from denuncias where iddenuncia = ?', [ids])
    res.render('denuncia/editar', { lista })
}

DenunciaCTl.actualizar = async (req, res) => {
    const id = req.user.idUsuario
    const ids = req.params.id
    const { fotoDenuncia, categoriaDenuncia, descripccionDenuncia, tituloDenuncia } = req.body
    const nuevoProducto = {
        fotoDenuncia,
        categoriaDenuncia,
        descripccionDenuncia,
        tituloDenuncia,
    }
    await orm.Denuncia.findOne({ where: { idDenuncia: ids } })
        .then(actualizar => {
            actualizar.update(nuevoProducto)
            req.flash('success', 'Actuaizado con exito')
            res.redirect('/denuncia/lista/' + ids);
        })
}

DenunciaCTl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuario
    await orm.Denuncia.destroy({ where: { idDenuncia: ids } })
        .then(() => {
            req.flash('success', 'Actuaizado con exito')
            res.redirect('/denuncia/lista/' + id);
        })
}

module.exports = DenunciaCTl;
