const promocionCtl = {}

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')

promocionCtl.mostrar = (req, res) => {
    res.render('promociones/agregar');
}

promocionCtl.mandar = async (req, res) => {
    const id = req.user.idAdmin
    const { titulo, tipoDescuento, informacion, marcas } = req.body
    const nuevoEnvio = {
        titulo,
        tipoDescuento,
        informacion,
        marcas

    }
    await orm.promociones.create(nuevoEnvio)
    req.flash('success', 'Se Guardo con exito')
    res.redirect('/promociones/lista/' + id);
}

promocionCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from promociones')
    res.render('promociones/lista', { lista })
}

promocionCtl.eliminar = async (req, res) => {
    const id = req.params.id
    await orm.promociones.destroy({ where: { idPromociones: id } })
        .then(() => {
            req.flash('success', 'se elimino con exito')
            res.redirect('/promociones/eliminar/' + ids);
        })
}

promocionCtl.tarer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from promociones where idPromociones = ?', [id])
    res.render('promociones/editar', { lista })
}

promocionCtl.editar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idAdmin
    const { titulo, tipoDescuento, informacion, marcas } = req.body
    const nuevoEnvio = {
        titulo,
        tipoDescuento,
        informacion,
        marcas

    }
    await orm.promociones.findOne({ where: { idPromociones: id } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'se actualizo con exito')
            res.redirect('/promociones/lista/' + ids);
        })
}

promocionCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idAdmin
    await orm.promociones.destroy({ where: { idPromociones: ids } })
        .then(() => {
            req.flash('success', 'Se elimino con exito')
            res.redirect('/promociones/lista/' + id);
        })
}

module.exports = promocionCtl