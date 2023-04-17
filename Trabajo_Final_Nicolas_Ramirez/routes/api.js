const express = require("express")
const router = express.Router()
const {guardarPokemon, vistaDeTodosLosPokemons,vistaUnicoPokemon,editarPokemon,eliminarPokemon} = require("../controller/apiController")
const {validarID} = require("../middleware/validarID")
const {check} = require("express-validator")
const { consultarPokemon } = require("../controller/apiExternaController")


router.post('/nuevo',[
    check("nombre").not().isEmpty().withMessage("El campo nombre es requerido"),
    check("edad").not().isEmpty().withMessage("El campo edad es requerido"),
    check("tipo").not().isEmpty().withMessage("El campo tipo es requerido"),
    check("descripcion").not().isEmpty().withMessage("El campo descripcion es requerido"),
    check("evolucion").not().isEmpty().withMessage("El campo evolucion es requerido")
], guardarPokemon)
router.get("/todos", vistaDeTodosLosPokemons)
router.get("/unico/:id",validarID, vistaUnicoPokemon)

router.put("/edit/:id",validarID,[
    check("nombre").not().isEmpty().withMessage("El campo nombre es necesario para actualizar la ficha"),
    check("edad").not().isEmpty().withMessage("El campo edad es necesario para actualizar la ficha"),
    check("tipo").not().isEmpty().withMessage("El campo tipo es necesario para actualizar la ficha"),
    check("descripcion").not().isEmpty().withMessage("El campo descripcion es necesario para actualizar la ficha"),
    check("evolucion").not().isEmpty().withMessage("El campo evolucion es necesario para actualizar la ficha")
], editarPokemon)

router.delete("/delete/:id/", validarID, eliminarPokemon)

router.get("/poke/:nombre", consultarPokemon)

module.exports = router



