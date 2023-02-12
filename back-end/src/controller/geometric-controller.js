const repository = require('../repository/geometric-repository'); 

module.exports = {
    async resize(req, res) {
        try{
            const { imageBase64, size1, size2, fx, fy, type } = req.body;

            const imagem = await repository.resize(imageBase64, size1, size2, fx, fy, type);

            return res.status(201).json(imagem);
        } catch(e){
            return res.status(400).json({ message: e.message });
        }
    }
}