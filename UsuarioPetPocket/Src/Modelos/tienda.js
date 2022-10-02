const tienda =(sequlize, type) =>{
    return sequlize.define('tienda',{
        idtienda: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tituloTienda: type.STRING,
        descripccionTienda: type.STRING,
        categoriaTienda: type.STRING,
        fotoTienda: type.STRING,
        creacionTienda:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionTienda:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports = tienda

