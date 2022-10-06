const promociones =(sequelize, type) =>{
    return sequelize.define('promociones', {
        idPromociones: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: type.STRING,
        tipoDescuento: type.STRING,
        informacion: type.STRING,
        marcas: type.STRING,


        creacionPromociones:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionPromociones:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = promociones