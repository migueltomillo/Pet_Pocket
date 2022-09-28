const tienda = {};

const baseDatosSQL = require("../Base de datos/BaseDatos.sql");
const basededatosORM = require("../Base de datos/BaseDatos.orm");

const perdido= async (req, res) => {
    try {
        res.render('tienda/perdido');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

tienda.mostrar = async(req, res) => {
    const enlistar = await baseDatosSQL.query(
        "SELECT * FROM tiendas"
    );
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


module.exports = {
   perdido
}