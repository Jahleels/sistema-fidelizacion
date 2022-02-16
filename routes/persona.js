const express = require('express');
const router = express.Router();
const personaController = require('../controllers/personaController');

router.get('/', personaController.getPersonas);
router.post('/send', personaController.postPersona);

module.exports = router;