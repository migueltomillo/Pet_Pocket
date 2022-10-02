const bellCtl = {}

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')

bellCtl.mostrar = (req, res) => {
    res.render('bells/agregar');
}

bellCtl.mandar = async (req, res) => {
    const id = req.user.idUsuarios
    const { titulo, descripcion, imagenbells } = req.body
    const nuevoEnvio = {
        titulo,
        descripcion,
        imagenbells

    }
    await orm.bells.create(nuevoEnvio)
    req.flash('success', 'Se Guardo con exito')
    res.redirect('/bells/listar/' + id);
}

bellCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from bells')
    res.render('bells/listar', { lista })
}

bellCtl.eliminar = async (req, res) => {
    const id = req.params.id
    await orm.mascota.destroy({ where: { idMascotas: id } })
        .then(() => {
            req.flash('success', 'se elimino con exito')
            res.redirect('/mascota/eliminar/' + ids);
        })
}

bellCtl.tarer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from bells where idbell = ?', [id])
    res.render('bells/editar', { lista })
}

bellCtl.actualizar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    const { titulo, descripcion, imagenbells } = req.body
    const nuevoEnvio = {
        titulo,
        descripcion,
        imagenbells
    }
    await orm.bells.findOne({ where: { idbells: id } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'se actualizo con exito')
            res.redirect('/bells/listar/' + ids);
        })
}

bellCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuarios
    await orm.bells.destroy({ where: { idbells: ids } })
        .then(() => {
            req.flash('success', 'Se elimino con exito')
            res.redirect('/bells/listar/' + id);
        })
}

module.exports = bellCtl