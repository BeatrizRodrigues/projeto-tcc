const { Router } = require('express');
const controller = require('../controller/colorspaces-controller');
const multer = require('multer');

const routes = Router();

routes.post("/cvtColor", controller.cvtColor);

routes.post("/inRange", controller.inRange);

module.exports = app => app.use('/colorSpaces', routes);