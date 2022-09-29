const password = {};

const  sql = require('../Base de datos/BaseDatos.sql')

const passport = require('passport');

password.mostrarpassword = async(req, res) => {
    const max = await sql.query('select max (idUsuarios) AS maximo FROM usuarios') 
    console.log (max)
    res.render('password', {max});
};

