// ************ Require's ************
const express = require('express');
const router = express.Router();

// ************ Controller Require ************
const {home,search} = require('../controllers/other');

// "/"Raiz
router.get('/', home); 
router.get('/busqueda', search); 

module.exports = router;
