const perdidoCtl = {}

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')

perdidoCtl.mostrar = (req, res) => {
    res.render('perdido/agregar');
}

perdidoCtl.mandar = async (req, res) => {
    const id = req.user.idUsuarios
    const { ImagenPerdido, FechaPerdido, DescripcionPerdido, TelefonoPerdido } = req.body
    const nuevoEnvio = {
        ImagenPerdido,
        FechaPerdido,
        DescripcionPerdido,
        TelefonoPerdido,

    }
    await orm.perdido.create(nuevoEnvio)
    req.flash('success', 'Se Guardo con exito')
    res.redirect('/perdido/lista/' + id);
}

perdidoCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from perdidos')
    res.render('perdido/lista', { lista })
}

perdidoCtl.eliminar = async (req, res) => {
    const id = req.params.id
    await orm.perdido.destroy({ where: { idPerdido : id } })
        .then(() => {
            req.flash('success', 'se elimino con exito')
            res.redirect('/perdido/eliminar/' + ids);
        })
}

perdidoCtl.traer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from perdidos where idPerdido  = ?', [id])
    res.render('perdido/editar', { lista })
}

perdidoCtl.actualizar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    const { ImagenPerdido, FechaPerdido, DescripcionPerdido, TelefonoPerdido } = req.body
    const nuevoEnvio = {
        ImagenPerdido,
        FechaPerdido,
        DescripcionPerdido,
        TelefonoPerdido
    }
    await orm.perdido.findOne({ where: { idPerdido : id } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'se actualizo con exito')
            res.redirect('/perdido/lista/' + ids);
        })
}

perdidoCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuarios
    await orm.perdido.destroy({ where: { idPerdido : ids } })
        .then(() => {
            req.flash('success', 'Se elimino con exito')
            res.redirect('/perdido/lista/' + id);
        })
}

module.exports = perdidoCtl