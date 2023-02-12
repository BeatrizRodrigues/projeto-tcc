const { Router } = require('express');
const controller = require('../controller/smoothing-controller');

const routes = Router();

routes.post("/filter2D", controller.filter2D);
routes.post("/blur", controller.blur);
routes.post("/boxFilter", controller.boxFilter);
routes.post("/GaussianBlur", controller.GaussianBlur);
routes.post("/medianBlur", controller.medianBlur);
routes.post("/bilateralFilter", controller.bilateralFilter);

module.exports = app => app.use('/smoothing', routes);