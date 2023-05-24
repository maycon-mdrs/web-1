const database = require('../sequelize_config/models');

class ConfigController {
    static async listarConfig(req, res){
        try{
            const result =  await database.config.findAll();
            return res.json(result);
        } catch(error){
            return res.send(error.toString());
        }
    }

    static async buscarConfig(req, res){
        const { id } = req.params;
        try {
            const result = await database.config.findOne({where: {id: Number(id)}});
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async criarConfig(req, res){
        const newConfig = req.body;
        try {
            const result = await database.config.create(newConfig);
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async atualizarConfig(req, res){
        const newConfig = req.body;
        const { id } = req.params;

        try {
            await database.config.update(newConfig, {where: {id: Number(id)}});
            const result = await database.config.findOne({where: {id: Number(id)}});
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async deletarConfig(req, res){
        const { id } = req.params;
        try {
            await database.config.destroy({where: {id: Number(id)}});
            return res.json({mensagem: `id ${id} deletado`});
        } catch (error) {
            return res.send(error.toString());
        }
    }

    
}

module.exports = ConfigController