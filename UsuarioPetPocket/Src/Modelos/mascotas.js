const mascotas =(sequelize, type) =>{
    return sequelize.define('mascotas', {
        idMascotas: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING(99),
        raza: type.STRING(99),
        edad: type.INTEGER(99),
        peso: type.INTEGER(99),
        descripcion: type.STRING(99),
        foto: type.STRING,

        creacionMascotas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionMascotas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = mascotas