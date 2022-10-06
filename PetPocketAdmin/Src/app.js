const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash'); 
const mysqlstore = require('express-mysql-session')(session);
const bodyparser = require('body-parser');

const { database } = require('./keys'); 

const app = express(); 
require('./Lib/passport');

/// archivos compartidos
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'Vistas'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpres: require('./Lib/handlebars')
}));
app.set('view engine', '.hbs');
/// archivos compartidos


//midlewars
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());
app.use(session({
    secret: 'PETPOCKET',
    resave: false,
    saveUninitialized: false,
    store: new mysqlstore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//midlewars

//varible globales 
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
});
//varible globales 

//public
app.use(express.static(path.join(__dirname, 'public')));
//public

app.use("/roles",require ('./Rutas/rol.rutas'))
app.use("/comunicados",require ('./Rutas/comunicado.rutas'))
app.use("/promociones",require ('./Rutas/promocion.rutas'))
app.use("/veterinarias",require ('./Rutas/veterinaria.rutas'))


//routers
app.use(require("./Rutas/index.rutas"))
app.use(require("./Rutas/registro.rutas"))
// Index
app.use(require('./Rutas/bienvenida.rutas'));
app.use(require('./Rutas/principal.rutas'));
app.use(require('./Rutas/mensaje.rutas'));


module.exports = app;