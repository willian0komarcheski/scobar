// services/ProductService.js

const Produto = require('../Models/Produto');

class ProdutoService {
    async createProduto(produtoData) {
        try {
            return await Produto.create(produtoData);
        } catch (error) {
            throw new Error('Could not create product: ' + error.message);
        }
    }

    async getAllProdutos() {
        try {
            return await Produto.findAll();
        } catch (error) {
            throw new Error('Could not get products: ' + error.message);
        }
    }

    async getProdutoById(produtoId) {
        try {
            return await Produto.findByPk(produtoId);
        } catch (error) {
            throw new Error('Could not get product: ' + error.message);
        }
    }

    async updateProduto(produtoId, produtoData) {
        try {
            const produto = await Produto.findByPk(produtoId);
            if (!produto) {
                throw new Error('Product not found');
            }
            await produto.update(produtoData);
            return produto;
        } catch (error) {
            throw new Error('Could not update product: ' + error.message);
        }
    }

    async deleteProduto(produtoId) {
        try {
            const produto = await Produto.findByPk(produtoId);
            if (!produto) {
                throw new Error('Product not found');
            }
            await produto.destroy();
        } catch (error) {
            throw new Error('Could not delete product: ' + error.message);
        }
    }
}

module.exports = new ProdutoService();
