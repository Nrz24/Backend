const mongoose = require("mongoose")

const Schema = mongoose.Schema
const schema = new Schema({
    nombre:{
        type: String,
        required: true,
    },
    edad:{
        type: Number,
        required: true
    },
    tipo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    evolucion:{
        type: Boolean,
        required: true
    }
});

const Pokedex = mongoose.model("Pokedex", schema)
module.exports = { Pokedex }