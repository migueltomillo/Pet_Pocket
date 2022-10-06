const comunicadoCtl = {}

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')

comunicadoCtl.mostrar = (req, res) => {
    res.render('comunicados/agregar');
}

comunicadoCtl.mandar = async (req, res) => {
    const id = req.user.idAdmin
    const { titulo, descripcion } = req.body
    const nuevoEnvio = {
        titulo,
        descripcion,
      

    }
    await orm.comunicados.create(nuevoEnvio)
    req.flash('success', 'Se Guardo con exito')
    res.redirect('/comunicados/lista/' + id);
}

comunicadoCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from comunicados')
    res.render('comunicados/lista', { lista })
}

comunicadoCtl.eliminar = async (req, res) => {
    const id = req.params.id
    await orm.comunicado.destroy({ where: { idComunicados: id } })
        .then(() => {
            req.flash('success', 'se elimino con exito')
            res.redirect('/comunicados/eliminar/' + ids);
        })
}

comunicadoCtl.tarer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from comunicados where idComunicados = ?', [id])
    res.render('comunicados/editar', { lista })
}

comunicadoCtl.editar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idAdmin
    const { titulo,descripcion } = req.body
    const nuevoEnvio = {
        titulo,
        descripcion,
       
    }
    await orm.comunicados.findOne({ where: { idComunicados: id } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'se actualizo con exito')
            res.redirect('/comunicados/lista/' + ids);
        })
}

comunicadoCtl.eliminar = async (req, res) => { 
    const ids = req.params.id
    const id = req.user.idAdmin
    await orm.comunicados.destroy({ where: { idComunicados: ids } })
        .then(() => {
            req.flash('success', 'Se elimino con exito')
            res.redirect('/comunicados/lista/' + id);
        })
}

module.exports = comunicadoCtl