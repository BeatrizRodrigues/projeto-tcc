const repository = require('../repository/smoothing-repository');

module.exports = {
    async filter2D(req, res) {
        try {
            const { imageBase64, size1, size2, point1, point2, delta, type } = req.body;

            let poin1 = parseInt(point1);
            let poin2 = parseInt(point2);

            await repository.filter2D(imageBase64, size1, size2, poin1, poin2, delta, type);

            return res.status(201).json("Feito");
        } catch (e) {
            return res.status(400).json({ message: e.message });
        }
    },

    async blur(req, res) {
        try {
            const { imageBase64, size1, size2, point1, point2, type } = req.body;

            let poin1 = parseInt(point1);
            let poin2 = parseInt(point2);

            await repository.blur(imageBase64, size1, size2, poin1, poin2, type);

            return res.status(201).json("Feito");
        } catch (e) {
            return res.status(400).json({ message: e.message });
        }
    },

    async boxFilter(req, res) {
        try {
            const { imageBase64, size1, size2, point1, point2, ddepth, normalize, type } = req.body;

            let poin1 = parseInt(point1);
            let poin2 = parseInt(point2);
            let depth = parseInt(ddepth);

            await repository.boxFilter(imageBase64, size1, size2, poin1, poin2, depth, normalize, type);

            return res.status(201).json("Feito");
        } catch (e) {
            return res.status(400).json({ message: e.message });
        }
    },

    async GaussianBlur(req, res) {
        try {
            const { imageBase64, size1, size2, sigmaX, sigmaY, type } = req.body;

            await repository.GaussianBlur(imageBase64, size1, size2, sigmaX, sigmaY, type);

            return res.status(201).json("Feito");
        } catch (e) {
            return res.status(400).json({ message: e.message });
        }
    },

    async medianBlur(req, res) {
        try {
            const { imageBase64, ksize } = req.body;

            await repository.medianBlur(imageBase64, ksize);

            return res.status(201).json("Feito");
        } catch (e) {
            return res.status(400).json({ message: e.message });
        }
    },

    async bilateralFilter(req, res) {
        try {
            const { imageBase64, d, sigmaColor, sigmaSpace, borderType } = req.body;

            await repository.bilateralFilter(imageBase64, d, sigmaColor, sigmaSpace, borderType);

            return res.status(201).json("Feito");
        } catch (e) {
            return res.status(400).json({ message: e.message });
        }
    }
}