const mongoose = require('mongoose');
const admSchema = new mongoose.Schema({
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
    rol:{
        type: "Admin",
        default: "Admin"
    }
}, {
    timestamps: true,
    versionkey: false
})

module.exports = mongoose.model("Jefes", admSchema);