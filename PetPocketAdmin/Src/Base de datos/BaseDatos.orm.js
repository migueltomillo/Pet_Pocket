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

const adminUsuarioModelo = require('../Modelos/adminUsuario')
const proyectoModelo = require('../Modelos/proyecto')
const comunicadoModelo = require('../Modelos/comunicado')
const promocionModelo = require('../Modelos/promocion')

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

  const adminUsuario = adminUsuarioModelo(sequelize, Sequelize)
  const proyecto = proyectoModelo(sequelize, Sequelize)
  const comunicados = comunicadoModelo(sequelize, Sequelize)
  const promociones = promocionModelo(sequelize, Sequelize)

  adminUsuario.hasMany(proyecto)
  proyecto.belongsTo(adminUsuario)
  comunicados.belongsTo(comunicados)
  promociones.belongsTo(promociones)

module.exports = {
  adminUsuario,
    proyecto,
    comunicados,
    promociones
  
}