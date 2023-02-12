const { Router } = require('express');
const controller = require('../controller/morphological-controller');

const routes = Router();

routes.post("/erode", controller.erode);
routes.post("/dilate", controller.dilate);
routes.post("/MorphologyEx", controller.MorphologyEx);

module.exports = app => app.use('/morphological', routes);