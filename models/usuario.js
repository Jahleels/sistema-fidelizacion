const mongoose = require('mongoose');

const { Schema } = mongoose;

const usuarioSchema = new Schema({
    name: String,
    password: String,
    roll: String
    
});

const Usuario = mongoose.model('usuarios', usuarioSchema);
module.exports = Usuario; 