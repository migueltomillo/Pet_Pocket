const usuarios =(sequelize, type) =>{
    return sequelize.define('usuarios', {
        idUsuarios: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING(99),
        apellido: type.STRING(99),
        username: type.STRING(99),
        foto: type.STRING(99),
        email: type.STRING, 
        password: type.STRING,
        creacionUsuarios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionUsuarios:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = usuarios