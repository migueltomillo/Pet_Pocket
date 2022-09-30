const veterinariaCtl = {}

const sql = require('../Base de datos/BaseDatos.sql')

const orm = require('../Base de datos/BaseDatos.orm')

veterinariaCtl.mostrar = (req, res) => {
    res.render('veterinaria/veterinaria_pet');
}

veterinariaCtl.mandar = async(req, res) =>{
    const {nombre, sector, calle, telefono, especialidad} = req.body
    const nuevo = {
        nombre,
        sector,
        calle,
        telefono,
        especialidad
    }
    await orm.veterinaria.create(nuevo);
    res.redirect('/veterinaria/veterinaria_pet/');
}