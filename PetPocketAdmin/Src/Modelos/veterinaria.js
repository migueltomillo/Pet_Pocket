const veterinarias =(sequelize, type) =>{
    return sequelize.define('veterinarias', {
        idVeterinarias: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: type.STRING,
        descripcion: type.STRING,
        especialidad: type.STRING,
        ciudad: type.STRING,
        contacto: type.STRING(10),
        ubicacion: type.STRING,

        creacionVeterinarias:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionVeterinarias:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = veterinarias