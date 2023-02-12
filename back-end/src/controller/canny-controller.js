const repository = require('../repository/canny-repository'); 

module.exports = {

    async canny(req, res) {
        try{
            const { imageBase64, threshold1, threshold2, apertureSize, gradientL2 } = req.body;

            const dstResult = await repository.canny(imageBase64, threshold1, threshold2, apertureSize, gradientL2);

            console.log(dstResult);
            return res.status(201).json(dstResult);
        } catch(e){
            return res.status(400).json({ message: e.message });
        }
    }

}