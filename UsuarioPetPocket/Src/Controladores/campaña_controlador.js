const campañas ={};
const baseDatosSQL = require("../Database/basededatos.sql");
const basededatosORM = require("../Database/basededatos.orm");

campañas.mostrar = async (req, res) =>{
    const enlistar = await baseDatosSQL.query(
        "SELECT * FROM campañas"
    );

    res.render("campaña/campaña", {enlistar});
};