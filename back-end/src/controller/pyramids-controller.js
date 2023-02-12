const repository = require('../repository/pyramids-repository');

module.exports = {
    async pyrUp(req, res) {
        try {
            const { imageBase64, x, y, borderType } = req.body;

            const imagem = await repository.pyrUp(imageBase64, x, y, borderType);

            return res.status(201).json(imagem);
        } catch (e) {
            return res.status(400).json({ message: e.message });
        }
    },

    async pyrDown(req, res) {
        try {
            const { imageBase64, x, y, borderType } = req.body;

            const imagem = await repository.pyrDown(imageBase64, x, y, borderType);

            return res.status(201).json(imagem);
        } catch (e) {
            return res.status(400).json({ message: e.message });
        }
    }
}