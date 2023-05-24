const express = require('express');
const router = express.Router();
const Tipo_linkController = require('../controllers/tipo_linkController');

router.get('/tipo_link', Tipo_linkController.listarTipo_link);
router.get('/tipo_link/:id', Tipo_linkController.buscarTipo_link);
router.delete('/tipo_link/:id', Tipo_linkController.deletarTipo_link);

module.exports = router