const denuncialoCTl = {}

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')

denuncialoCTl.mostrar = (req, res) => {
    res.render('denuncialo/agregar');
}

denuncialoCTl.mandar = async (req, res) => {
     const id = req.user.idUsuario
    const { tituloDenuncialo,descripccionDenuncialo,categoriaDenuncialo } = req.body
    const nuevoDenuncialo = {
        tituloDenuncialo,
        descripccionDenuncialo,
        categoriaDenuncialo,

    }
    await orm.denuncialo.create(nuevoDenuncialo)
    req.flash('success', 'Guardado con exito')
    res.redirect('/denuncialo/lista');
}

denuncialoCTl.lista = async (req, res) => {
    const lista = await sql.query('select * from denuncialos')
    res.render('denuncialo/lista', { lista })
}

denuncialoCTl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from denuncialos where iddenuncialo = ?', [ids])
    res.render('denuncialo/editar', { lista })
}

denuncialoCTl.actualizar = async (req, res) => {
    const id = req.user.idUsuario
    const ids = req.params.id
    const {  categoriaDenuncialo, descripccionDenuncialo, tituloDenuncialo } = req.body
    const nuevoProducto = {
        categoriaDenuncialo,
        descripccionDenuncialo,
        tituloDenuncialo,
    }
    await orm.denuncialo.findOne({ where: { iddenuncialo: ids } })
        .then(actualizar => {
            actualizar.update(nuevoProducto)
            req.flash('success', 'Actuaizado con exito')
            res.redirect('/denuncialo/lista/' + ids);
        })
}

denuncialoCTl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuario
    await orm.denuncialo.destroy({ where: { iddenuncialo: ids } })
        .then(() => {
            req.flash('success', 'Actuaizado con exito')
            res.redirect('/denuncialo/lista/' + id);
        })
}

module.exports = denuncialoCTl;