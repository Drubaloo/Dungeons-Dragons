const { Schema } = require('mongoose');

const classSchema = {
    className: {
        type: String
    },
    modifyers: [String]
}

module.exports = classSchema