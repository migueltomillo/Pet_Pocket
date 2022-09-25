const principalWeb = async (req, res) => {
    try {
        res.render('principal/inicio');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    principalWeb
}