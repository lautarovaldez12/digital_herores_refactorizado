const express = require('express');
const router = express.Router();
const heroesController = require('../controllers/heroesController.js');

router.get('/', heroesController.ver);
router.get('/detalle/:id/', heroesController.datoHeroe);
router.get('/detalle/:id/:ok?', heroesController.biografia);


module.exports = router;


