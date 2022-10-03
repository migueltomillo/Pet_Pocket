const adopcion = {};

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')

adopcion.mostrar = async(req, res) => {
    res.render('adopcion/agregar');
};

adopcion.mandar = async(req, res) => {

    const { tituloAdopcion, imagenAdopcion, descripcionAdopcion } = req.body
    const nuevoAdopcion = {
        tituloAdopcion,
        imagenAdopcion,
        descripcionAdopcion
    }

    await orm.adopcion.create(nuevoAdopcion)

    req.flash('success', 'Guardado con éxito')
    res.redirect('/adopcion/lista')
}

adopcion.lista = async(req, res) => {
    const lista = await sql.query('select * from adopciones')
    res.render('adopcion/lista', { lista })
}

adopcion.traer = async(req, res) => {
    const ids = req.params.id
    const lista = await sql.query('select * from adopciones where idAdopcion=?', [ids])
    res.render('adopcion/editar', { lista })
}


adopcion.actualizar = async(req, res) => {

    const { idAdopcion, tituloAdopcion, imagenAdopcion, descripcionAdopcion } = req.body
    const nuevoAdopcion = {
        tituloAdopcion,
        imagenAdopcion,
        descripcionAdopcion
    }
    await orm.adopcion.findOne({ where: { idAdopcion: idAdopcion } })
        .then(actualizar => {
            actualizar.update(nuevoAdopcion)
        })
    req.flash('success', 'Actualizado con éxito')
    res.redirect('/adopcion/lista')
}

adopcion.eliminar = async(req, res) => {
    const ids = req.params.id
    await orm.adopcion.destroy({ where: { idAdopcion: ids } })
        .then(() => {
            req.flash('success', 'Eliminado con éxito')
            res.redirect('/adopcion/lista')
        })
}

module.exports = adopcion