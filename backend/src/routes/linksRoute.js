const express = require('express');
const router = express.Router();
const LinksController = require('../controllers/linksController');

router.get('/links', LinksController.listarLinks);
router.get('/links/:id', LinksController.buscarLink);
router.post('/links', LinksController.criarLinks);
router.put('/links/:id', LinksController.atualizarLink);
router.delete('/links/:id', LinksController.deletarLink);

module.exports = router