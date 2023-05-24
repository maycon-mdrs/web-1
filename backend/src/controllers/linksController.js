const database = require('../sequelize_config/models');

class LinksController {

    static async listarLinks(req, res){
        try{
            const result =  await database.links.findAll();
            return res.json(result);
        } catch(error){
            return res.send(error.toString());
        }
    }

    static async buscarLink(req, res){
        const { id } = req.params;
        try {
            const result = await database.links.findOne({where: {id: Number(id)}});
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async criarLinks(req, res){
        const newLink = req.body;
        try {
            const result = await database.links.create(newLink);
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async atualizarLink(req, res){
        const newLink = req.body;
        const { id } = req.params;

        try {
            await database.links.update(newLink, {where: {id: Number(id)}});
            const result = await database.links.findOne({where: {id: Number(id)}});
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async deletarLink(req, res){
        const { id } = req.params;
        try {
            await database.links.destroy({where: {id: Number(id)}});
            return res.json({mensagem: `id ${id} deletado`});
        } catch (error) {
            return res.send(error.toString());
        }
    }
}

module.exports = LinksController