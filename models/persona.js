const mongoose = require('mongoose');

const { Schema } = mongoose;

const personaSchema = new Schema({
    name:{type: String, required: true},
    cc: {type: Number, required: true},
    phoneNumber: {type: Number},
    email:{type: String},
    city: {type: String},
    barrio: {type: String},
    address: String,
    puesto: {type: String},
    mesa: {type: Number},
    lider: {type: String},
    user:String
});

const Persona = mongoose.model('persona', personaSchema);
module.exports = Persona; 