const express = require('express');
const ProdutosController = require('../controllers/produtosController');
const router = express.Router();

router.get('/produtos/:id', ProdutosController.buscarProduto);
router.get('/produtos', ProdutosController.listarProdutos);
router.post('/produtos', ProdutosController.criarProduto);
router.put('/produtos/:id', ProdutosController.atualizarProduto);

module.exports = router;