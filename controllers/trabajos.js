const {modeloTrabajos} = require('../models');
const { db } = require('../models/nosql/equipos');
const mongoose = require('mongoose');

/**
 * Obtener Trabajo by ID
 */
 const getTrabajo = async (req, res) =>{
    const {_id} = req.params;
    const data = await modeloTrabajos.findById(_id);
    res.send({data});
};

/**
 * Obtener lista de Trabajos disponibles
 */
const getTrabajos = async (req, res) =>{
    const data = await modeloTrabajos.find({});
    res.send({data});
    
};

/**
 * Crear un Trabajo nuevo
 */
const postTrabajos = (req, res) =>{
    const _id = mongoose.Types.ObjectId();
    const trabajos = modeloTrabajos(req.body);
    trabajos
    .save()
    .then((data)=> res.json(data))
    .catch((error=> res.json({message: error})));
};

/**
 * Modificar un Trabajo
 */
 const putTrabajos = async (req, res) =>{
    const {_id} = req.params;
    const {
    idEquipo,
    nombreEquipo,
    fechaPlan,
    fecha_ini,
    fecha_fin,
    obsTecnico,
    estado
    } = req.body;
    const data = await modeloTrabajos.updateOne({_id: _id}, {$set: {
        idEquipo,
        nombreEquipo,
        fechaPlan,
        fecha_ini,
        fecha_fin,
        obsTecnico,
        estado}});
    res.send({data});
};

module.exports = {getTrabajo, getTrabajos, postTrabajos, putTrabajos}