const { Schema, model } = require("mongoose")

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
)

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
    category: categorySchema,
    weight: Number
})

const Equipment = model("Equipment", equipmentSchema)