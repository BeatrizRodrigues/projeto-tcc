const { Router } = require('express');
const controller = require('../controller/gradients-controller');

const routes = Router();

routes.post("/sobel", controller.sobel);
routes.post("/scharr", controller.scharr);
routes.post("/laplacian", controller.laplacian);

module.exports = app => app.use('/gradients', routes);