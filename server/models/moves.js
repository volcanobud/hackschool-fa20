const mongoose = require('mongoose');

const Move = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    power:{
        type: Number,
        required: true
    },
})

module.exports = Move;