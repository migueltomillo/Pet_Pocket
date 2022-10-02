const registro = {};

const passport = require('passport');

registro.mostrarRegistro = async(req, res) => {
    res.render('login/registro');
};

registro.Registro = passport.authenticate('local.signup', {
    successRedirect: '/CerrarSecion',
    failureRedirect: '/Registro',
    failureFlash: true
});

registro.mostrarLogin = (req, res, next) => {
    res.render('login/login');
};

registro.Login = passport.authenticate('local.signin', {
    successRedirect: '/inicio',
    failureRedirect: '/',
    failureFlash: true
}); 

registro.cierreSesion = (req, res, next) => {
    req.logOut();
    res.redirect('/');
};

module.exports = registro;
