const express = require('express');
const router = express.Router();

const personaRouter = require('./persona');
const municipiosRouter = require('./municipios');
const usuarioRouter = require('./usuario');

router.use('/dataTables', personaRouter);
router.use('/', municipiosRouter);
router.use('/usuario', usuarioRouter);

module.exports = router;