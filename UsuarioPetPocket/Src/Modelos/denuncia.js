const denuncia = (sequelize, type) =>{
    return sequelize.define('denuncia', {
        iddenuncia: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        Descripciondenuncia: type.STRING,

        creaciondenuncia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizaciondenuncia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = denuncia