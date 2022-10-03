const adopcion = (sequelize, type) => {
    return sequelize.define('adopciones', {
        idAdopcion: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        tituloAdopcion: type.STRING(99),
        imagenAdopcion: type.STRING,
        descripcionAdopcion: type.STRING(99),

        fechaAdopcion: {
            type: 'TIMESTAMP',
            defaultValue: type.literal('CURRENT_TIMESTAMP'),
            allowNull: false
        }
    }, {
        timestamps: false,
    })
}

module.exports = adopcion