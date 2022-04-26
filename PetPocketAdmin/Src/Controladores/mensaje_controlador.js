

const mensajeBienvenida = async (req, res) => {
    try {
        res.render('mensaje/mensaje_bienvenida');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    mensajeBienvenida
}