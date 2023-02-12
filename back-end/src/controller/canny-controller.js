const repository = require('../repository/canny-repository'); 

module.exports = {

    async canny(req, res) {
        try{
            const { imageBase64, threshold1, threshold2, apertureSize, gradientL2 } = req.body;

            await repository.canny(imageBase64, threshold1, threshold2, apertureSize, gradientL2);

            return res.status(201).json("Feito");
        } catch(e){
            return res.status(400).json({ message: e.message });
        }
    }

}