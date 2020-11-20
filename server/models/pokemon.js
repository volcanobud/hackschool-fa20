const mongoose = require('mongoose');
const Move = require('./moves.js');
const PokemonSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    type1:{
        type: String,
        required: true
    },
    type2:{
        type: String,
        required: false
    },
    moves:{
        type: [Move],
        required: true,
       // validate: [arrayLimit, "exceeds 4 moves"]
    },
})
// function arrayLimit(val) {
//     return val.length <= 4;
//   }

const Pokemon = mongoose.model('Pokemon', PokemonSchema);
module.exports = Pokemon;