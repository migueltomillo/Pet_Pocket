const reaction = (sequelize, type) =>{
    return sequelize.define('reaction', {
        idreaction: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        Descripcionreaction: type.STRING,

        creacioncommnent:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionreaction:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = reaction