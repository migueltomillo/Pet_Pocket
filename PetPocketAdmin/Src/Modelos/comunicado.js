const comunicados =(sequelize, type) =>{
    return sequelize.define('comunicados', {
        idComunicados: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: type.STRING,
        descripcion: type.STRING,
       

        creacionComunicados:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionComunicados:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = comunicados