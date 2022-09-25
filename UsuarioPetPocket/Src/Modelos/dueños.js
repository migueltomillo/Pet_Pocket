const dueños =(sequelize, type) =>{
    return sequelize.define('dueños', {
        idDueños: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre: type.STRING(99),
        telefono: type.INTEGER(10),
       

        creacionDueños:{
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        },
      
    },{
        timestamps: false,
    })
}

module.exports = dueños