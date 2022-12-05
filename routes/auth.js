const express = require('express');
const router = express.Router();
const {regPer} = require('../controllers/personal')

//Estamos en http://localhost:port/api/auth/login
//Estamos en http://localhost:port/api/auth/sign-up


router.post('/', regPer);

module.exports = router;
