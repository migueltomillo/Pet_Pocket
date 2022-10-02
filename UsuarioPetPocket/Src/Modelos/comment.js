const comment = (sequelize, type) =>{
    return sequelize.define('comment', {
        idcommmet: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        
        Descripcioncomment: type.STRING,


        creacioncomment:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacioncomment:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = comment