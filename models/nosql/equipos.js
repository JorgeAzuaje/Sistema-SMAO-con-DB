const mongoose = require('mongoose');
const eqSchema = new mongoose.Schema(
    {
        id:{
            type: String,
            unique: true
        },
        nombre: {
            type: String
        },
        descripcion:{
            type: String
        },
        serial:{
            type: String
        },
        fecha_ini: {
            type: Data
        },
        fecha_ult:{
            type: Date
        },
        fecha_man:{
            type: Date
        },
        id_Trabajo: {
            type: Date
        },
        estado: {
            type:['Reparado', 'Mantenimiento', 'Dañado'],
            dafault: 'Dañado'    
        }
    },
    {
        versionkey: false
    }
    )