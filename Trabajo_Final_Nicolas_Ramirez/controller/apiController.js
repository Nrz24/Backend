const { Pokedex } = require("../models/pokedex")
const { validationResult } = require("express-validator")


const guardarPokemon = async (req, res)=> {
    try {  
        const err = validationResult (req)
        if(err.isEmpty()){
            const pokemon = new Pokedex(req.body)
            await pokemon.save()
            res.status(201).json(pokemon)
        } else {
            res.status(501).json(err)
        }                            
    } catch (error) {
        res.status(501).json(error)
    }
}

const editarPokemon = async (req, res) => {
    try{
        const err = validationResult(req)
        if(err.isEmpty){
            await Pokedex.findByIdAndUpdate(req.params.id,req.body)
    res.status(201).json({msg: "El pokemon se actualizo"})
        }else{
            res.status(501).json(error)
        }
    }catch (error){
        res.status(501).json(error)
    }
}

const vistaDeTodosLosPokemons = async(req,res)=>{
    const pokemons = await Pokedex.find()
    res.status(200).json({pokemons})
}

const vistaUnicoPokemon = async(req, res)=>{
    const pokemon = await Pokedex.findById(req.params.id)
    res.status(200).json(pokemon)
}

const eliminarPokemon = async (req,res)=>{
    await Pokedex.findByIdAndDelete(req.params.id)
    res.status(200).json({msg: "El pokemon fue eliminado"})
}


module.exports = {guardarPokemon, vistaDeTodosLosPokemons, vistaUnicoPokemon, editarPokemon, eliminarPokemon}
