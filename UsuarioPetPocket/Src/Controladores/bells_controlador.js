const bellctl ={}

const sql = require("../Base de datos/BaseDatos.sql");
const orm = require("../Base de datos/BaseDatos.orm");

bellctl.mostrar = (req, res) =>{
    res.render('/bells/agregar');
}
bellctl.mandar = async (req, res) =>{
    const id = req.user.idUsuarios
    const {titulo, descripcion, imagenbells} = req.body
    const nuevoEnvio = {
        titulo,
        descripcion,
        imagenbells
    }
    await orm.bell.create(nuevoEnvio)
    req.flash('success', 'Guardado con exito')
    res.redirect('/bells/listar/'+ id);   
}
bellctl.lista = async(req, res)=>{
    const lista = await baseDatosSQL.query("select * from bells")
    res.render("/bells/listar", {lista});
}

bellctl.traer = async(req, res) =>{
    const ids = req.params.id
    const lista = await baseDatosSQL.query("select * from bells where idbells =?", [ids])
    res.render("/bells/editar", {lista})
}

bellctl.actualizar = async(req, res) =>{
    //const id = req.user.idUsuarios//
    const {titulo, descripcion, imagenbells} = req.body
    const nuevoEnvio = {
        titulo,
        descripcion,
        imagenbells
    }
    await orm.bell.finOne({ where: {idbells: ids}})
    .then(actualizar=>{
        actualizar.update(nuevoEnvio)
        req.flash('success', 'Actualizacion exitosa')
        res.redirect('/bells/listar/' /*+ id*/);
    })    
}  
bellctl.eliminar = async(req, res) =>{
    const ids = req.params.id
    await orm.bell.destroy({ where: {idbells: ids}})
    .then(()=>{
        req.flash('success', 'Actualizacion exitosa')
        res.redirect('/bells/listar/' /*+ id*/);
    })
}
module.exports = bellctl;