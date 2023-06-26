const express = require('express');
const router = express.Router();
const ConfigController = require('../controllers/configController.js');
const  uploadImagemMiddleware  = require('../midlewares/configMiddleware.js');

router.get('/config', ConfigController.listarConfig);
router.get('/config/:id', ConfigController.buscarConfig);
router.post('/config', ConfigController.criarConfig);
router.put('/config/:id', ConfigController.atualizarConfig);
router.delete('/config/:id', ConfigController.deletarConfig);
router.post('/upload', uploadImagemMiddleware, ConfigController.uploadImagem);
router.get('/getLogo', ConfigController.getImagem);

module.exports = router