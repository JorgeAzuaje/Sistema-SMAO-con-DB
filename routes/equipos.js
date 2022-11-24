const express = require('express');
const router = express.Router();
const {getEquipos, postEquipos} = require('../controllers/equipos')

router.get('/', getEquipos); 
router.post('/', postEquipos)

module.exports = router;