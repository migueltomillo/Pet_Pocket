const adminUsuario =(sequelize, type) =>{
    return sequelize.define('adminUsuario', {
        idAdmin: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING(99),
        apellido: type.STRING(99),
        cedula: type.STRING(10),
        telefono: type.STRING(10),
        direccion: type.STRING(99),
        ciudad: type.STRING(99),
        username: type.STRING(99),
        email: type.STRING, 
        rol: type.STRING, 
        estado: type.STRING, 
        password: type.STRING,
        creacionAdmin:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionAdmin:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = adminUsuario