const express = require('express');
const router = express.Router();
const {getTrabajos, getTrabajo, postTrabajos, putTrabajos} = require('../controllers/trabajos')

//RUTAS CRUD

router.get('/', getTrabajos); 

router.post('/', postTrabajos);

router.get('/:_id', getTrabajo);

router.put('/:_id', putTrabajos);

module.exports = router