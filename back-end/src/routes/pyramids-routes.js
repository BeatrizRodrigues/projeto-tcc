const { Router } = require('express');
const controller = require('../controller/pyramids-controller');

const routes = Router();

routes.post("/pyrUp", controller.pyrUp);
routes.post("/pyrDown", controller.pyrDown);

module.exports = app => app.use('/pyramids', routes);