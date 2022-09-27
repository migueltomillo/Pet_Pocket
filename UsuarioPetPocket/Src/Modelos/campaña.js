const campañas =(sequelize, type) =>{
    return sequelize.define('campaña', {
        idCampaña: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        titulo: type.STRING(99),
        descripcion: type.STRING(99),
        imagenCampaña: type.STRING,

        creacionCampaña:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionCampaña:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = campañas