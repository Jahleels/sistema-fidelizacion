const mongoose = require('mongoose');
const { Schema } = mongoose;

const municipioSchema = new Schema({
    municipio: String,
    barrios: [],
    puestosVotacion: String
})

const Municipio = mongoose.model('municipio', municipioSchema);
module.exports = Municipio;