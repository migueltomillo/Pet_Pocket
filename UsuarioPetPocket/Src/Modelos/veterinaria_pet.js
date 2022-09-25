const veterinarias =(sequelize, type) =>{
    return sequelize.define('veterinarias', {
        idveterinarias: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: type.STRING(99),
        descripcion: type.STRING(99),
        telefono: type.INTEGER(10),

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