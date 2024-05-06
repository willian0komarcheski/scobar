// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const ProdutoController = require('../Controllers/ProdutoController');

router.post('/produto', ProdutoController.createProduto.bind(ProdutoController));
router.get('/produto', ProdutoController.getAllProdutos.bind(ProdutoController));
router.get('/produto/:id', ProdutoController.getProdutoById.bind(ProdutoController));
router.put('/produto/:id', ProdutoController.updateProduto.bind(ProdutoController));
router.delete('/produto/:id', ProdutoController.deleteProduto.bind(ProdutoController));

module.exports = router;
