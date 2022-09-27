const tienda = {};

const baseDatosSQL = require("../Database/basededatos.sql");
const basededatosORM = require("../Database/basededatos.orm");

tienda.mostrar = async(req, res) => {
    const enlistar = await baseDatosSQL.query(
        "SELECT * FROM tiendas"
    );
    res.render("tienda/perdido", {enlistar});
}; 
tienda.agregar =  async (req, res) => {
    const idProducto = req.params.id;
    const {
        idtienda
    } = req.body
    const nuevoPorducto = {
        idtienda,
    };
    await basededatosORM.producto.create(nuevoPorducto);
    req.flash ("sucess", "Nuevo Producto.");
    res.redirect("/producto/tienda/" + idProducto);
}

tienda.eliminar =  async (req, res) => {
    const tiendaid = req.params.id;
    const id = req.user.idProducto;
    await basededatosORM.producto.destroy({
        where: {idtienda:  tiendaid},
    });
    req.flash ("sucess", "Producto Eliminado.");
    res.redirect("/producto/tienda/" +id)
};


module.exports = tienda;