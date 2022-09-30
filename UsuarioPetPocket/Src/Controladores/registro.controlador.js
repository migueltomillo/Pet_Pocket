const registro = {};
const sql = require("../Base de datos/BaseDatos.sql");
const passport = require('passport');

registro.mostrarRegistro = async(req, res) => {
    const maximo = await sql.query('select max (idUsuarios) as maximo FROM usuarios')
    res.render('login/registro',{maximo} );
   
};

registro.registro = passport.authenticate('local.signup', {
    successRedirect: '/CerrarSecion',
    failureRedirect: '/login',
    failureFlash: true
});

registro.mostrarLogin = (req, res, next) => {
    res.render('login/login');
};

registro.Login = passport.authenticate('local.signin', {
    successRedirect: '/login',
    failureRedirect: '/mensaje_bienvenida',
    failureFlash: true
}); 

registro.cierreSesion = (req, res, next) => {
    req.logOut();
    res.redirect('/login');
};

module.exports = registro;