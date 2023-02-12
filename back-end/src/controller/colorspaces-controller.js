const repository = require('../repository/colorspaces-repository'); 

module.exports = {

    async cvtColor(req, res) {
        try{
            const { imageBase64, code, dstCn } = req.body;

            await repository.cvtColor(imageBase64, code, dstCn);

            return res.status(201).json("feito");
        } catch(e){
            return res.status(400).json({ message: e.message });
        }
    },

    async inRange(req, res) {
        try {
            const { imageBase64 } = req.body;

            const imagem = await repository.inRange(imageBase64);
            
            return res.status(201).json(imagem);

        } catch(err) {
            return res.status(400).json({ message: err.message });
        }
    }
}