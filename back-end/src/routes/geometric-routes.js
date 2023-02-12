const { Router } = require('express');
const controller = require('../controller/geometric-controller');

const routes = Router();

routes.post("/", controller.resize);

module.exports = app => app.use('/geometric', routes);