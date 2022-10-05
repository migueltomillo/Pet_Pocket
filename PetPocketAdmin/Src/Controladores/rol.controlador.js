const adminUserCtl = {}

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')





adminUserCtl.lista = async (req, res) => {
    const lista = await sql.query('select * from adminusuarios')
    res.render('roles/lista', { lista })
}



adminUserCtl.traer = async (req, res) => {
    const id = req.params.id
    const lista = await sql.query('select * from adminusuarios where idAdmin = ?', [id])
    res.render('roles/editar', { lista })
}

adminUserCtl.editar = async (req, res) => {
    const id = req.params.id
    const ids = req.user.idAdmin
    const { nombre,apellido,cedula,telefono,direccion,ciudad,username,email,rol,estado } = req.body
    const nuevoEnvio = {
        nombre,
        apellido,
        cedula,
        telefono,
        direccion,
        ciudad,
        username,
        email,
        rol,
        estado
       
    }
    await orm.adminUsuario.findOne({ where: { idAdmin: id } })
        .then(actualizar => {
            actualizar.update(nuevoEnvio)
            req.flash('success', 'se actualizo con exito')
            res.redirect('/roles/lista/' + ids);
        })
}




module.exports = adminUserCtl