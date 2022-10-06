const veterinariaCtl = {}

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')

veterinariaCtl.mostrar = (req, res) => {
    res.render('veterinarias/agregar');
}

veterinariaCtl.mandar = async (req, res) => {
    const id = req.user.idAdmin
    const { titulo, descripcion,especialidad,ciudad,contacto,ubicacion } = req.body
    const nuevoEnvio = {
        titulo,
        descripcion,
        especialidad,
        ciudad,
        contacto,
        ubicacion

    }
    await orm.veterinarias.create(nuevoEnvio)
    req.flash('success', 'Se Guardo con exito')
    res.redirect('/veterinarias/lista/' + id);
}

veterinariaCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from veterinarias')
    res.render('veterinarias/lista', { lista })
}

veterinariaCtl.eliminar = async (req, res) => {
    const id = req.params.id
    await orm.comunicado.destroy({ where: { idVeterinarias: id } })
        .then(() => {
            req.flash('success', 'se elimino con exito')
            res.redirect('/veterinarias/eliminar/' + ids);
        })
}

veterinariaCtl.tarer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from veterinarias where idVeterinarias = ?', [id])
    res.render('veterinarias/editar', { lista })
}

veterinariaCtl.editar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idAdmin
    const { titulo, descripcion,especialidad,ciudad,contacto,ubicacion } = req.body
    const nuevoEnvio = {
        titulo,
        descripcion,
        especialidad,
        ciudad,
        contacto,
        ubicacion
    }
    await orm.veterinarias.findOne({ where: { idVeterinarias: id } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'se actualizo con exito')
            res.redirect('/veterinarias/lista/' + ids);
        })
}

veterinariaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idAdmin
    await orm.veterinarias.destroy({ where: { idVeterinarias: ids } })
        .then(() => {
            req.flash('success', 'Se elimino con exito')
            res.redirect('/veterinarias/lista/' + id);
        })
}

module.exports = veterinariaCtl