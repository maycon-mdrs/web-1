const database = require('../sequelize_config/models');
const path = require('path');
const fs = require('fs');

class ConfigController {
    static async listarConfig(req, res) {
        try {
            const result = await database.config.findAll();
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async buscarConfig(req, res) {
        const { id } = req.params;
        try {
            const result = await database.config.findOne({ where: { id: Number(id) } });
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async criarConfig(req, res) {
        const newConfig = req.body;
        try {
            const result = await database.config.create(newConfig);
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async uploadImagem(req, res) {
        console.log(req);
        res.send('Upload feito com sucesso');
    }

    static async getImagem(req, res) {
        const requestedFileName = 'logo.png'; // Nome do arquivo solicitado
        const defaultFileName = 'default.png'; // Nome da imagem padrão
        const requestedFilePath = path.join(__dirname, '../../uploads', requestedFileName);
        const defaultFilePath = path.join(__dirname, '../../uploads', defaultFileName);
        // Verifica se o arquivo solicitado existe
        if (fs.existsSync(requestedFilePath)) {
            // Envia o arquivo solicitado
            res.sendFile(requestedFilePath);
        } else if (fs.existsSync(defaultFilePath)) {
            // Envia a imagem padrão
            res.sendFile(defaultFilePath);
        } else {
            // Nenhum arquivo encontrado
            res.status(404).send('Arquivo não encontrado');
        }

    }

    static async atualizarConfig(req, res) {
        const newConfig = req.body;
        const { id } = req.params;

        try {
            await database.config.update(newConfig, { where: { id: Number(id) } });
            const result = await database.config.findOne({ where: { id: Number(id) } });
            return res.json(result);
        } catch (error) {
            return res.send(error.toString());
        }
    }

    static async deletarConfig(req, res) {
        const { id } = req.params;
        try {
            await database.config.destroy({ where: { id: Number(id) } });
            return res.json({ mensagem: `id ${id} deletado` });
        } catch (error) {
            return res.send(error.toString());
        }
    }


}

module.exports = ConfigController