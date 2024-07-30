// ************ Require's ************
const express = require('express');
const router = express.Router();
const {create, store, edit, update, destroy} = require("../controllers/admin")

/*** CREATE ONE PRODUCT ***/ 
router.get('/crear-producto', create); 
router.post('/crear-producto', store); 

/*** EDIT ONE PRODUCT ***/ 
router.get('/editar-producto/:id', edit); 
router.put('/editar-producto/:id', update); 


/*** DELETE ONE PRODUCT ***/ 
router.delete('/eliminar/:id', destroy); 


module.exports = router;
