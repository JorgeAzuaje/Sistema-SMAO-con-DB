const {registrarPersonal} = require('../models');
const mongoose = require('mongoose');

///Registrar personal
 const regPer = async (req, res) =>{
    const _id = mongoose.Types.ObjectId();
    const personal = registrarPersonal(req.body);
    personal
    .save()
    .then((data)=> res.json(data))
    .catch((error=> res.json({message: error})));
};

module.exports = {regPer};
