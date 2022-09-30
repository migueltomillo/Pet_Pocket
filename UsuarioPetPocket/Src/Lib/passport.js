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
          done(null, false, req.flash("message", "Bienvenido"));
        }
      } else {
        return done(
          null,
          false,
          req.flash("message", "Bienvenido.")
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
			const users = await orm.users.findOne({ where: { username: username } });
			if (users === null) {
				const { idUsuarios } = req.body
				let newUser = {
					idUsuarios: idUsuarios,
				
					username: username,
					password: password
				};
			
				newUser.password = await helpers.encryptPassword(password);
				const result = await orm.users.create(newUser);

		

				newUser.id = result.insertId;

				const imagenUsuario = req.files.imagenUsuario
				const validation = path.extname(imagenUsuario.name)

				const extension = [".PNG", ".JPG", ".JPEG", ".GIF", ".TIF", ".png", ".jpg", ".jpeg", ".gif", ".tif"];

				if (!extension.includes(validation)) {
					req.flash("success", "Imagen no compatible.")
				}

				if (!req.files) {
					req.flash("success", "Imagen no ingresada.")
				}

				const location = __dirname + "/../public/multimedia/user/" + imagenUsuario.name;

				imagenUsuario.mv(location, function (err) {
					if (err) {
						return req.flash("message", err)
					}
					sql.query("UPDATE users SET imagenUsuario = ? WHERE idUsuarios = ?", [imagenUsuario.name, idUsuarios])
					console.log("Imagen ingresada")
				})
				return done(null, newUser);
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

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});