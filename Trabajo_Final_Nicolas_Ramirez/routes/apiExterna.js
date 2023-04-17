const express = require('express')
const router = express.Router()
const Controller = require('../controller/apiExternaController')

router.get("/poke", Controller.consultarPokemon)

module.exports= router