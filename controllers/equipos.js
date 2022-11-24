const {modeloEquipos} = require('../models');
const { db } = require('../models/nosql/trabajos');
const mongoose = require('mongoose');

/**
 * Obtener equipo by ID
 */
const getEquipo = async (req, res) =>{
    const {_id} = req.params;
    const data = await modeloEquipos.findById(_id);
    res.send({data});
};

/**
 * Obtener lista de equipos disponibles
 */
 const getEquipos = async (req, res) =>{
    const data = await modeloEquipos.find({});
    res.send({data});
    
};

/**
 * Crear un equipo nuevo
 */
 const postEquipos = async (req, res) =>{
    const _id = mongoose.Types.ObjectId();
    const equipos = modeloEquipos(req.body);
    equipos
    .save()
    .then((data)=> res.json(data))
    .catch((error=> res.json({message: error})));
    
};

module.exports = {getEquipo, getEquipos, postEquipos};