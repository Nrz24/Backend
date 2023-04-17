const {Pokedex} = require("../models/pokedex")
const validarID = async (req,res,next)=>{
    try{
        const item = await Pokedex.findById(req.params.id)
        if (item !== null) {
            next()
        } else {
            res.status(500).json({msg: "el id es invalido"})
        }
    } catch (error) {
        res.status(500).json({msg:"el id ingresado no coincide con el formato de 24 caracteres"}), (error)
    }
}

module.exports = {validarID}




