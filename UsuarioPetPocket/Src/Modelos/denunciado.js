const denunciado =(sequlize, type) =>{
    return sequlize.define('denunciado',{
        ididDenunciado: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tituloidDenunciado: type.STRING,
        descripccionidDenunciado: type.STRING,
        categoriaidDenunciado: type.STRING,
        fotoidDenunciado: type.STRING,
        creacionidDenunciado:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionidDenunciado:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports = denunciado

