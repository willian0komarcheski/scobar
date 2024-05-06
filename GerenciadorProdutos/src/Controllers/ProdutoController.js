// controllers/ProdutoController.js

const ProdutoService = require('../Services/ProdutoService');

class ProdutoController {
    async createProduto(req, res) {
        try {
            const produto = await ProdutoService.createProduto(req.body);
            res.status(201).json(produto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getAllProdutos(req, res) {
        try {
            const produtos = await ProdutoService.getAllProdutos();
            console.log(produtos);
            res.json(produtos);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getProdutoById(req, res) {
        try {
            const produto = await ProdutoService.getProdutoById(req.params.id);
            if (!produto) {
                return res.status(404).json({ error: 'Produto not found' });
            }
            res.json(produto);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateProduto(req, res) {
        try {
            const produto = await ProdutoService.updateProduto(req.params.id, req.body);
            res.json(produto);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteProduto(req, res) {
        try {
            await ProdutoService.deleteProduto(req.params.id);
            res.json({ message: 'Produto deleted successfully' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = new ProdutoController();
