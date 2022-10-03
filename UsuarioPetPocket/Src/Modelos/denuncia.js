const denuncia =(sequlize, type) =>{
    return sequlize.define('denuncia',{
        idDenuncia: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tituloDenuncia: type.STRING,
        descripccionDenuncia: type.STRING,
        categoriaDenuncia: type.STRING,
        fotoDenuncia: type.STRING,
        creacionDenuncia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDenuncia:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports = denuncia

