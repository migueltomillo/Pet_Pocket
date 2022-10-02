const denuniado = (sequelize, type) =>{
    return sequelize.define('denuniado', {
        iddenuniado: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        Descripciondenuniado: type.STRING,

        creacioncommnent:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizaciondenuniado:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = denuniado