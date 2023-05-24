const database = require('../sequelize_config/models');

class tipo_linkController {
    static async listarTipo_link(req, res){
        try{
            const result =  await database.tipo_link.findAll();
            return res.json(result);
        } catch(error){
            return res.send(error.toString());
        }
    }

    static async buscarTipo_link(req, res){
        const { id } = req.params;
        try {
            const result = await database.tipo_link.findOne({where: {id: Number(id)}});
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async deletarTipo_link(req, res){
        const { id } = req.params;
        try {
            await database.tipo_link.destroy({where: {id: Number(id)}});
            return res.json({mensagem: `id ${id} deletado`});
        } catch (error) {
            return res.send(error.toString());
        }
    }
}

module.exports = tipo_linkController