const veterinarias =(sequelize, type) =>{
    return sequelize.define('veterinarias', {
        idVeterinaria: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING(99),
        sector: type.STRING(99),
        telefono: type.INTEGER(10),
        calle: type.INTEGER(10),
        especialidad: type.INTEGER(10),

        creacionbell:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionbell:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}


module.exports = veterinarias