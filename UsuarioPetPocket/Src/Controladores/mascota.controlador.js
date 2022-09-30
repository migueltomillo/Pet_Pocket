const mascotaCtl = {}

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')

mascotaCtl.mostrar = (req, res) => {
    res.render('mascota/agregar');
}

mascotaCtl.mandar = async (req, res) => {
    const id = req.user.idUsuarios
    const { nombre, raza,edad,peso,descripcion,foto } = req.body
    const nuevoEnvio = {
        nombre,
        raza,
        edad,
        peso,
        descripcion,
        foto,

    }
    await orm.mascota.create(nuevoEnvio)
    req.flash('success', 'Se Guardo con exito')
    res.redirect('/mascota/lista/' + id);
}

mascotaCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from mascotas')
    res.render('mascota/lista', { lista })
}

mascotaCtl.eliminar = async (req, res) => {
    const id = req.params.id
    await orm.mascota.destroy({ where: { idMascotas: id } })
        .then(() => {
            req.flash('success', 'se elimino con exito')
            res.redirect('/mascota/eliminar/' + ids);
        })
}

mascotaCtl.tarer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from mascotas where idMascotas = ?', [id])
    res.render('mascota/editar', { lista })
}

mascotaCtl.editar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    const { nombre, raza,edad,peso,descripcion,foto } = req.body
    const nuevoEnvio = {
        nombre,
        raza,
        edad,
        peso,
        descripcion,
        foto,
    }
    await orm.mascota.findOne({ where: { idMascotas: id } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'se actualizo con exito')
            res.redirect('/mascota/lista/' + ids);
        })
}

mascotaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuarios
    await orm.mascota.destroy({ where: { idMascotas: ids } })
        .then(() => {
            req.flash('success', 'Se elimino con exito')
            res.redirect('/mascota/lista/' + id);
        })
}

module.exports = mascotaCtl