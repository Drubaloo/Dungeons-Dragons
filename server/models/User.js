const { Schema, model} = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            set: s => s.toLowerCase()
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            set: s => s.toLowerCase()
        },
        password: {
            type: String,
            trim: true
        },
        characters: [
            {
                type: Schema.Types.ObjectId,
                ref: "Character"
            }
        ]
    }
)

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next()

    try {
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(this.password, salt)
        this.password = hashedPassword
        next()
    } catch (err) {
        next(err)
    }
})

const User = model("User", userSchema)

module.exports = User

