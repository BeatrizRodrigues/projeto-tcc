const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json({limit: '100000000kb'}));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

require('./routes/canny-routes')(app);
require('./routes/colorspaces-routes')(app);
require('./routes/geometric-routes')(app);
require('./routes/gradients-routes')(app);
require('./routes/morphological-routes')(app);
require('./routes/pyramids-routes')(app);
require('./routes/smoothing-routes')(app);
require('./routes/threshold-routes')(app);

app.listen(config.apiPort);

module.exports = app;