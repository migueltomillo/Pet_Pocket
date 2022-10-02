const Sequelize = require('sequelize')
const mysql = require('mysql2/promise')

const dbName = process.env.DB_SCHEMAS || "PetPocket";

mysql.createConnection({
    host: process.env.DB_HOST || "127.0.0.1",
    port: process.env.DB_PORT || "3306",
    user     : process.env.DB_USER || "root",
    password : process.env.DB_PASSWORD || "",
}).then( connection => {
    connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName};`).then((res) => {
        console.info("Base de datos creada o comprobada correctamente");
    })
})

const usuarioModelo = require('../Modelos/usuario')
const proyectoModelo = require('../Modelos/proyecto')
const commentModelo = require('../Modelos/comment')
const denunciaModelo = require('../Modelos/denuncia')
const denunciadoModelo = require('../Modelos/denunciado')
const publicationModelo = require('../Modelos/publication')
const reactionModelo = require('../Modelos/reaction')



const sequelize = new Sequelize(
  'PetPocket',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      require: 30000,
      idle: 10000
    }
  }
)

sequelize.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

sequelize.sync({ force: false })
  .then(() => {
    console.log("Tablas sincronizadas")
  })

  const usuario = usuarioModelo(sequelize, Sequelize)
  const proyecto = proyectoModelo(sequelize, Sequelize)
  const comment = commentModelo(sequelize, Sequelize)
  const denuncia = denunciaModelo(sequelize, Sequelize)
  const denunciado = denunciadoModelo(sequelize, Sequelize)
  const publication = publicationModelo(sequelize, Sequelize)
  const reaction = reactionModelo(sequelize, Sequelize)


  usuario.hasMany(proyecto)
  proyecto.belongsTo(usuario)


module.exports = {
    usuario,
    proyecto,
    comment,
    denuncia,
    denunciado,
    publication,
    reaction
    
}