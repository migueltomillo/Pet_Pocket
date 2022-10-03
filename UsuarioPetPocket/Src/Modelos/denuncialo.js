const denuncialo =(sequlize, type) =>{
    return sequlize.define('denuncialo',{
        idDenuncialo: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tituloDenuncialo: type.STRING,
        descripccionDenuncialo: type.STRING,
        categoriaDenuncialo: type.STRING,
        creacionDenuncialo:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionDenuncialo:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports = denuncialo

