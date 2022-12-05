const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/session');
const checkRol = require('../middleware/rol');
const {getEquipos, getEquipo, postEquipos, putEquipos, deleteEquipos} = require('../controllers/equipos')

//Creamos la ruta CRUD

router.get('/', authMiddleware, checkRol(["Admin", "Personal"]), getEquipos); 

router.post('/', authMiddleware, checkRol(["Admin", "Personal"]), postEquipos);

router.get('/:_id', authMiddleware, checkRol(["Admin", "Personal"]), getEquipo);

router.put('/:_id', authMiddleware, checkRol(["Admin"]), putEquipos);

router.delete('/:_id', authMiddleware, checkRol(["Admin"]), deleteEquipos)

module.exports = router;