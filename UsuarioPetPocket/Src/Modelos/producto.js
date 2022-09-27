const producto =(sequlize, type) =>{
    return sequlize.define('producto',{
        idProducto: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        creacionProducto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
        actualizacionProducto:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP '),
            allowNull: false
        }
    },{
        timestamps: false,
    })
}
module.exports = producto