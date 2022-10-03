const veterinariaCtl = {}

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')

veterinariaCtl.mostrar = (req, res) => {
    res.render('veterinaria/agregar');
}

veterinariaCtl.mandar = async (req, res) => {
    const id = req.user.idUsuarios
    const {nombre, sector, calle, telefono, especialidad} = req.body
    const nuevoEnvio = {
        nombre,
        sector,
        calle,
        telefono,
        especialidad

    }
    await orm.veterinarias.create(nuevoEnvio)
    req.flash('success', 'Se Guardo con exito')
    res.redirect('/veterinaria/lista/' + id);
}

veterinariaCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from veterinarias')
    res.render('veterinaria/lista', { lista })
}

veterinariaCtl.eliminar = async (req, res) => {
    const id = req.params.id
    await orm.veterinarias.destroy({ where: { idVeterinaria: id } })
        .then(() => {
            req.flash('success', 'se elimino con exito')
            res.redirect('/veterinaria/eliminar/' + ids);
        })
}

veterinariaCtl.traer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from veterinarias where idVeterinaria = ?', [id])
    res.render('veterinaria/editar', { lista })
}

veterinariaCtl.actualizar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idUsuarios
    const {nombre, sector, calle, telefono, especialidad} = req.body
    const nuevoEnvio = {
        nombre,
        sector,
        calle,
        telefono,
        especialidad
    }
    await orm.veterinarias.findOne({ where: { idVeterinaria: id } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'se actualizo con exito')
            res.redirect('/veterinaria/lista/' + ids);
        })
}

veterinariaCtl.eliminar = async (req, res) => {
    const ids = req.params.id
    const id = req.user.idUsuarios
    await orm.veterinarias.destroy({ where: { idVeterinaria: ids } })
        .then(() => {
            req.flash('success', 'Se elimino con exito')
            res.redirect('/veterinaria/lista/' + id);
        })
}

module.exports = veterinariaCtl