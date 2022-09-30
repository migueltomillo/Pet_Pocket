
const veterinariaCtl = {}

const sql = require("../Base de datos/BaseDatos.sql");
const orm = require("../Base de datos/BaseDatos.orm");

veterinariaCtl.mostrar = (req, res) => {
    res.render('veterinaria/agregar');
}
veterinariaCtl.mandar = async (req, res) => {
   /*  const id = req.user.idUsuarios */
    const {nombre, sector, calle, telefono, especialidad} = req.body
    const nuevo = {
        nombre,
        sector,
        calle,
        telefono,
        especialidad
    }
    await orm.veterinarias.create(nuevo)
    req.flash('success', 'Guardado con exito')
    res.redirect('/veterinaria/lista/' /*+ id */);
}
veterinariaCtl.lista = async (req, res) => {
    const lista = await sql.query("select * from veterinarias")
    res.render("veterinaria/lista", { lista });
}

veterinariaCtl.traer = async (req, res) => {
    const ids = req.params.id
    const lista = await sql.query("select * from veterinarias where idVeterinaria =?", [ids])
    res.render("veterinaria/editar", { lista })
}

veterinariaCtl.actualizar = async (req, res) => {
    //const id = req.user.idUsuarios//
    const ids = req.params.id
    const {nombre, sector, calle, telefono, especialidad} = req.body
    const nuevo = {
        nombre,
        sector,
        calle,
        telefono,
        especialidad
    }
    await orm.veterinarias.findOne({ where: { idVeterinaria: ids } })
        .then(actualizar => {
            actualizar.update(nuevo)
            req.flash('success', 'Actualizacion exitosa')
            res.redirect('/veterinaria/lista/' /*+ id*/);
        })
}

module.exports = veterinariaCtl;