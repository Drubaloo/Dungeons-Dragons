const { Schema, model } = require("mongoose")

const equipmentSchema = new Schema({
    index: {
        type: String,
        required: true
    }, 
    name: {
        type: String,
        required: true
    }, 
    url: {
        type: String,
        required: true
    },
})

const Equipment = model("Equipment", equipmentSchema)