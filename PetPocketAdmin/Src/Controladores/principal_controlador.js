

const carnetRegistro = async (req, res) => {
    try {
        res.render('carnet/registro_carnet');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    carnetRegistro
}