const express = require('express');
const router = express.Router();
const {getEquipo, getEquipos, postEquipos} = require('../controllers/equipos')

router.get('/_id', getEquipo);
router.get('/', getEquipos);
router.post('/', postEquipos);

module.exports = router;