const Pokedex = require('../models/pokedex');
const validarNombre = async (req, res, next) => {
    try {
    const item = await Pokedex.findOne({ nombre: req.params.nombre });
        if (item !== null) {
        next();
    } else {
        res.status(500).json({ msg: 'El nombre ingresado no es válido' });
    }
    } catch (error) {
        res.status(500).json({ msg: 'Error al validar el nombre ingresado' }, error);
    }
};

module.exports = { validarNombre };