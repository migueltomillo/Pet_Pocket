const tienda = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const basededatosORM = require("../Database/basededatos.orm");

tienda.mostrar = (req, res) => {
    const enlistar = await baseDatosSQL.query(
        "SELECT * FROM tiendas"
    );

    res.render("tienda/perdido", {enlistar});
}; 
