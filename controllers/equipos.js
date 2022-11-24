const {modeloEquipos} = require('../models');
const { db } = require('../models/nosql/trabajos');

/**
 * Obtener lista de equipos disponibles
 */
 const getEquipos = async (req, res) =>{
    const data = await modeloEquipos.find({});
    res.send({data});
    
};

/**
 * Crear un equipo nuevo
 * Actualmente no Funcional
 */
 const postEquipos = async (req, res) =>{
    const {body} = req
    console.log(body)
    const data = await modeloEquipos.create(body)
    res.send({data})
    
};

module.exports = {getEquipos, postEquipos}