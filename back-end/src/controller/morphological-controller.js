const repository = require('../repository/morphological-repository'); 

module.exports = {
    async erode(req, res) {
        try{
            const { imageBase64, size1, size2, point1, point2, val, borderType } = req.body;

            let poin1 = parseInt(point1);
            let poin2 = parseInt(point2);

            await repository.erode(imageBase64, size1, size2, poin1, poin2, val, borderType);

            return res.status(201).json("Feito");
        } catch(e){
            return res.status(400).json({ message: e.message });
        }
    },

    async dilate(req, res) {
        try{
            const { imageBase64, size1, size2, point1, point2, val, borderType } = req.body;

            let poin1 = parseInt(point1);
            let poin2 = parseInt(point2);

            await repository.dilate(imageBase64, size1, size2, poin1, poin2, val, borderType);

            return res.status(201).json("Feito");
        } catch(e){
            return res.status(400).json({ message: e.message });
        }
    },

    async MorphologyEx(req, res) {
        try{
            const { imageBase64, size1, size2, point1, point2, val, morphType, borderType } = req.body;

            let poin1 = parseInt(point1);
            let poin2 = parseInt(point2);

            await repository.MorphologyEx(imageBase64, size1, size2, poin1, poin2, val, morphType, borderType);

            return res.status(201).json("Feito");
        } catch(e){
            return res.status(400).json({ message: e.message });
        }
    }
}