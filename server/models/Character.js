const { Schema, model } = require("mongoose")
const classSchema = require("./Class")
const abilitySchema = require("./Ability")

const characterSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        level: {
            type: Number,
            required: true,
            default: 1 
        },
        background: {
            type: String,
            required: true,
            trim: true
        },
        race: {
            type: String,
            required: true,
            trim: true
        },
        alignment: {
            type: String,
            required: true,
            trim: true
        },
        speed: {
            type: Number,
            required: true
        },
        armorClass: {
            type: Number,
            required: true,
            default: 10
        },
        xp: {
            type: Number,
            required: true,
            default: 0
        },
        class: classSchema,
        abilities: [abilitySchema],
        inspiration: {
            type: Boolean,
            default: false
        },
        profBonus: {
            type: Number,
            required: true
        },
        skills: [
            {
                skill: String,
                abilityMod: String
            }
        ]

    }
)

const Character = model("Character", characterSchema)

module.exports = Character