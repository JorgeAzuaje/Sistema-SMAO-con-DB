const mongoose = require('mongoose');
const perSchema = new mongoose.Schema({
    nombre:{
        type: String
    },
    edad: {
        type: Number
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
    clave:{
        type: String
    },
    rol:{
        type: ["Personal"],
        default: "Personal"
    }
}, {
    timestamps: true,
    versionkey: false
})

module.exports = mongoose.model("Trabajadores", perSchema);