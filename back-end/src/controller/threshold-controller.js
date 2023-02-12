const repository = require('../repository/thresholding-repository'); 

module.exports = {

    async threshold(req, res) {
        try {
            const { imageBase64, thresh, maxval, type } = req.body;

            await repository.threshold(imageBase64, thresh, maxval, type);

            return res.status(201).json("Feito");
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    },

    async adaptiveThreshold(req, res) {
        try {
            const { imageBase64, valMax, adaptiveMethod, type, blockSize, c } = req.body;

            const imagem = await repository.adaptiveThreshold(imageBase64, valMax, adaptiveMethod, type, blockSize, c);

            return res.status(201).json(imagem);
            
        } catch (error) {
            return res.status(400).json({ message: error.message });
        }
    }
}