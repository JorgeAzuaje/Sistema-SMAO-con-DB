const express = require('express');
const router = express.Router();
const {getTrabajos, getTrabajo, postTrabajos} = require('../controllers/trabajos')

//RUTAS CRUD

router.get('/', getTrabajos); 

router.post('/', postTrabajos);

router.get('/:_id', getTrabajo);

module.exports = router