const {check} = require('express-validator');
const validatePer = require("../utils/handleValidator");

const validatorRegPer = [
    check("nombre")
    .exists()
    .notEmpty(),
    check("edad")
    .exists()
    .notEmpty()
    .isInt(),
    check("email")
    .exists()
    .notEmpty()
    .isEmail(),
    check("clave")
    .exists()
    .notEmpty(),
    check("rol")
    .exists()
    .notEmpty(),
    (req, res, next) => {
        return validatePer(req, res, next)
    }
];

module.exports = { validatorRegPer }