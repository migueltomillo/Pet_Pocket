const bellctl = {}

const sql = require("../Base de datos/BaseDatos.sql");
const orm = require("../Base de datos/BaseDatos.orm");

bellctl.mostrar = (req, res) => {
    res.render('bells/agregar');
}
bellctl.mandar = async (req, res) => {
    //const id = req.user.idUsuarios
    const { titulo, descripcion, imagenbells } = req.body
    const nuevoEnvio = {
        titulo,
        descripcion,
        imagenbells
    }
    await orm.bells.create(nuevoEnvio)
    req.flash('success', 'Guardado con exito')
    res.redirect('/bells/listar/' /*+ id */);
}
bellctl.lista = async (req, res) => {
    const lista = await sql.query("select * from bells")
    res.render("bells/listar", { lista });
}

bellctl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query("select * from bells where idbell =?", [ids])
    res.render("bells/editar", { lista })
}

bellctl.actualizar = async (req, res) => {
    //const id = req.user.idUsuarios//
    const ids = req.params.id
    const { titulo, descripcion, imagenbells } = req.body
    const nuevoEnvio = {
        titulo,
        descripcion,
        imagenbells
    }
    await orm.bell.findOne({ where: { idbells: ids } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'Actualizacion exitosa')
            res.redirect('/bells/listar/' /*+ id*/);
        })
}
bellctl.eliminar = async (req, res) => {
    const ids = req.params.id
   /* const id = req.user.idUsuario*/
    await orm.bells.destroy({ where: { idbell: ids } })
        .then(() => {
            req.flash('success', 'Actualizacion exitosa')
            res.redirect('/bells/listar/' /*+ id*/);
        })
}
module.exports = bellctl;