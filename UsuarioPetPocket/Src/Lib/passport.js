const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const orm = require('../Base de datos/BaseDatos.orm')
const sql = require('../Base de datos/BaseDatos.sql')
const helpers = require("./helpers");

passport.use(
  "local.signin",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      const rows = await orm.usuario.findOne({ where: { username: username } });
      if (rows) {
        const user = rows;
        const validPassword = await helpers.matchPassword(
          password,
          user.password
        );
        if (validPassword) {
          done(null, user, req.flash("message", "Bienvenido" + " " + user.username));
        } else {
          done(null, false, req.flash("message", "Datos incorrecta"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("message", "El nombre de usuario no existe.")
        );
      }
    }
  )
);

passport.use(
  "local.signup",
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "password",
      passReqToCallback: true
    },
    async (req, username, password, done) => {
      const usuarios = await orm.usuario.findOne({ where: { username: username } });
      if (usuarios === null) {
        const{idUsuarios} = req.body
        let nuevoUsuario = {
          username,
          password
        };
        nuevoUsuario.password = await helpers.encryptPassword(password);
        const resultado = await orm.usuario.create(nuevoUsuario);
        nuevoUsuario.id = resultado.insertId;
        return done(null, nuevoUsuario);

        // Pertenence a la imagen 
        const imagenUsuario = req.files.imagenUsuario
        const validacion = path.extname(imagenUsuario.name)

        const extencion = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif"];

        if (!extencion.includes(validacion)) {
          req.flash("success", "Imagen no compatible.")
        }

        if (!req.files) {
          req.flash("success", "Imagen no insertada.")
        }

        const ubicacion = __dirname + "/../public/multimedia/user/" + imagenUsuario.name;

        imagenUsuario.mv(ubicacion, function (err) {
          if (err) {
            return req.flash("message", err)
          }
          sql.query("UPDATE usuarios SET imagenUsuario = ? WHERE idUsuarios = ?", [imagenUsuario.name, idUsuarios])
          console.log("Imagen de usuario ingresada")
        })

      } else {
        if (usuarios) {
          const usuario = usuarios
          if (username == usuario.username) {
            done(null, false, req.flash("message", "El nombre de usuario ya existe."))
          } else {
            let nuevoUsuario = {
              username,
              password
            };
            nuevoUsuario.password = await helpers.encryptPassword(password);
            const resultado = await orm.usuario.create(nuevoUsuario);
            nuevoUsuario.id = resultado.insertId;
            return done(null, nuevoUsuario);
          }
        }
      }
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});