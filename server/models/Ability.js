const { Schema } = require('mongoose');

const abilitySchema = {
    ability: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    modifyer: {
        type: Number,
        required: true
    }
}

module.exports = abilitySchema