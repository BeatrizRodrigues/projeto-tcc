const { Router } = require('express');
const controller = require('../controller/threshold-controller');

const routes = Router();

routes.post("/simple", controller.threshold);
routes.post("/adaptiveThreshold", controller.adaptiveThreshold);

module.exports = app => app.use('/threshold', routes);