const express = require('express');
const router = express.Router();
const municipioController = require('../controllers/municipiosController');

router.get('/list', municipioController.getMunicipios);
router.get('/list/barrios', municipioController.getBarrios);
module.exports = router