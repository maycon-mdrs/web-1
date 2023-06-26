const database = require('../sequelize_config/models');

class ProdutosController {
    static async buscarProduto(req, res){
        const { id } = req.params;
        try {
            const result = await database.produtos.findOne({where: {id: Number(id)}});
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async listarProdutos(req, res){
        try{
            const result =  await database.produtos.findAll();
            return res.json(result);
        } catch(error){
            return res.send(error.toString());
        }
    }

    static async criarProduto(req, res){
        const produto = req.body;
        try {
            const result = await database.produtos.create(produto);
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async atualizarProduto(req, res){
        const produto = req.body;
        const { id } = req.params;

        try {
            await database.produtos.update(produto, {where: {id: Number(id)}});
            const result = await database.produtos.findOne({where: {id: Number(id)}});
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }
}

module.exports = ProdutosController;