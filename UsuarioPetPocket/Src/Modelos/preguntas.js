const preguntas =(sequelize, type) =>{
    return sequelize.define('preguntas', {
        idAyudaPet: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tituloPregunta: type.STRING(99),
        descripcionPregunta: type.STRING,
        fechaPregunta: type.STRING, 
        horaPregunta:type.STRING,
        creacionAyudaPet:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacioPreguntas:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}

module.exports = preguntas