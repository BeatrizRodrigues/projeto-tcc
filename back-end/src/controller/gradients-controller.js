const repository = require('../repository/gradients-repository'); 

module.exports = {
    async sobel(req, res) {
        try{
            const { imageBase64, dx, dy, ksize, scale, delta, borderType } = req.body;

            const imagem = await repository.sobel(imageBase64, dx, dy, ksize, scale, delta, borderType);

            return res.status(201).json(imagem);
        } catch(e){
            return res.status(400).json({ message: e.message });
        }
    },

    async scharr(req, res) {
        try{
            const { imageBase64, dx, dy, scale, delta, borderType } = req.body;

            const imagem = await repository.scharr(imageBase64, dx, dy, scale, delta, borderType);

            return res.status(201).json(imagem);
            
        } catch(e){
            return res.status(400).json({ message: e.message });
        }
    },

    async laplacian(req, res) {
        try{
            const { imageBase64, ksize, scale, delta, borderType } = req.body;

            const imagem = await repository.laplacian(imageBase64, ksize, scale, delta, borderType);

            return res.status(201).json(imagem);

        } catch(e){
            return res.status(400).json({ message: e.message });
        }
    }
}