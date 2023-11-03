const { Schema, model } = require("mongoose")

const spellSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true
        },
        description: [String],
        higherLevel: [String],
        range: String,
    }
)

const Spell = model("Spell", spellSchema)

module.exports = Spell