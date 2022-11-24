const express = require('express');
const router = express.Router();
const {getEquipos, getEquipo, postEquipos, putEquipos} = require('../controllers/equipos')

router.get('/_id', getEquipo);
router.get('/', getEquipos);
router.post('/', postEquipos);

router.put('/:_id', putEquipos);

module.exports = router;