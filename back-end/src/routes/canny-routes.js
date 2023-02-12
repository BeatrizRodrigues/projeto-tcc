const { Router } = require('express');
const controller = require('../controller/canny-controller');

const routes = Router();

routes.post("/", controller.canny);

module.exports = app => app.use('/canny', routes);