const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/session');
const checkRol = require('../middleware/rol');
const {getTrabajos, getTrabajo, postTrabajos, putTrabajos, deleteTrabajos} = require('../controllers/trabajos')

//Creamos la ruta CRUD

router.get('/', authMiddleware, checkRol(["Admin", "Personal"]), getTrabajos); 

router.post('/', authMiddleware, checkRol(["Admin", "Personal"]), postTrabajos);

router.get('/:_id', authMiddleware, checkRol(["Admin", "Personal"]), getTrabajo);

router.put('/:_id', authMiddleware, checkRol(["Admin"]), putTrabajos);

router.delete('/:_id', authMiddleware, checkRol(["Admin"]), deleteTrabajos);

module.exports = router;