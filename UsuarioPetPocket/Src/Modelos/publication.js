const publication = (sequelize, type) =>{
    return sequelize.define('publication', {
        idpublication: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        Descripcionpublication: type.STRING,

        creacioncommnent:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionpublication:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = publication