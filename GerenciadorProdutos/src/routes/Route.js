// routes/productRoutes.js

const express = require('express');
const router = express.Router();
const ProdutoController = require('../Controllers/ProdutoController');
const LoginController = require('../Controllers/LoginController');

router.post('/produto', ProdutoController.createProduto.bind(ProdutoController));
router.get('/produto', ProdutoController.getAllProdutos.bind(ProdutoController));
router.get('/produto/:id', ProdutoController.getProdutoById.bind(ProdutoController));
router.put('/produto/:id', ProdutoController.updateProduto.bind(ProdutoController));
router.delete('/produto/:id', ProdutoController.deleteProduto.bind(ProdutoController));

router.post('/login', LoginController.createLogin.bind(LoginController));
router.get('/login', LoginController.getAllLogins.bind(LoginController));
router.get('/login/:id', LoginController.getLoginById.bind(LoginController));
router.put('/login/:id', LoginController.updateLogin.bind(LoginController));
router.delete('/login/:id', LoginController.deleteLogin.bind(LoginController));


module.exports = router;
